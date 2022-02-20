const fs = require('fs'),
	_ = require('lodash'),

	utils = require('./utils.js'),
	errors = require('../errors.js'),
	fetch = require('../fetch.js');

exports.transformV2toV1 = function (data) {
	return data.map((entry) => {
		let {
			meanings,
			...otherProps
		} = entry;

		meanings = meanings.reduce((meanings, meaning) => {
			let partOfSpeech, definitions;

			({
				partOfSpeech,
				definitions
			} = meaning);
			meanings[partOfSpeech] = definitions;

			return meanings;
		}, {});

		return {
			...otherProps,
			meaning: meanings
		};
	});
}

function transform(word, language, data, { include }) {

	let lastEntry;
	let definitions = data
		//.map(e => (e.entry || e.thesaurus_result))
		//.filter(e => e)
		.filter(e => (e.entry || e.thesaurus_result))
		.reduce((accumulator, e) => {
			let entry = e.entry;
			if (entry) {
				if (!entry.subentries) {
					lastEntry = entry;
					accumulator.push(entry);
					return accumulator; 
				}
			} else {
				lastEntry.thesaurus_result = e.thesaurus_result;
				return accumulator; 
			}

			let { subentries } = entry,
				mappedSubentries;

			if (subentries.length > 1) {
				utils.logEvent(word, language, 'subentries length is greater than 1', { data });
			}

			if (entry.sense_families) {
				utils.logEvent(word, language, 'entry has subentries and sense families', { data });
			}

			if (entry.etymology) {
				utils.logEvent(word, language, 'entry has subentries and etymology', { data });
			}

			mappedSubentries = subentries
				.map((subentry) => {
					if (subentry.sense_families) {
						utils.logEvent(word, language, 'subentry has sense families', { data });
					}

					if (subentry.sense_family) {
						subentry.sense_families = [];
						subentry.sense_families.push(subentry.sense_family);
					}

					return _.defaults(subentry, _.pick(entry, ['phonetics', 'etymology']))
				})

			return accumulator.concat(mappedSubentries);
		}, [])
		.map((entry) => {
			let { headword, lemma, phonetics = [], etymology = {}, sense_families = [], thesaurus_result = [] } = entry;

			//let { headword, lemma, homograph_index } = thesaurus_result;
			let synonymsGroup = _.get(thesaurus_result, 
				'synonyms_group.0.nyms', []).map(stuff=>stuff.nym_headword);


			return {
				word: lemma || headword,
				phonetic: _.get(phonetics, '0.text'),
				phonetics: phonetics.map((e) => {
					return {
						text: e.text,
						audio: e.oxford_audio
					};
				}),
				origin: _.get(etymology, 'etymology.text'),
				synonymsGroup,
				meanings: sense_families.map((sense_family) => {
					let { parts_of_speech, senses = [] } = sense_family;

					// if parts of speech is empty at this level.
					// Current hypothesis tells that it means only one sense is present
					// We need to take out parts_of_speech from it and use it.
					if (!parts_of_speech) {
						parts_of_speech = _.get(senses[0], 'parts_of_speech', []);

						if (senses.length > 1) {
							utils.logEvent(word, language, 'part of speech missing but more than one sense present', { data });
						}
					}

					if (parts_of_speech.length > 1) {
						utils.logEvent(word, language, 'more than one part of speech present', { data });
					}

					return {
						partOfSpeech: _.get(parts_of_speech[0], 'value'),
						definitions: senses.map((sense) => {
							let { definition = {}, example_groups = [], thesaurus_entries = [] } = sense,
								result = {
									definition: definition.text,
									example: _.get(example_groups[0], 'examples.0'),
									synonyms: _.get(thesaurus_entries[0], 'synonyms.0.nyms', [])
										.map(e => e.nym),
									antonyms: _.get(thesaurus_entries[0], 'antonyms.0.nyms', [])
										.map(e => e.nym)
								};

							if (include.example) {
								result.examples = _.reduce(example_groups, (accumulator, example_group) => {
									let example = _.get(example_group, 'examples', []);

									accumulator = accumulator.concat(example);

									return accumulator;
								}, []);
							}

							return result;
						})
					};
				})
			};
		});

	return definitions;
}

async function fetchFromSource(word, language) {
	// https://www.google.com/async/callback:5493?fc=ErUBCndBTlVfTnFUN29LdXdNSlQ2VlZoWUIwWE1HaElOclFNU29TOFF4ZGxGbV9zbzA3YmQ2NnJyQXlHNVlrb3l3OXgtREpRbXpNZ0M1NWZPeFo4NjQyVlA3S2ZQOHpYa292MFBMaDQweGRNQjR4eTlld1E4bDlCbXFJMBIWU2JzSllkLVpHc3J5OVFPb3Q2aVlDZxoiQU9NWVJ3QmU2cHRlbjZEZmw5U0lXT1lOR3hsM2xBWGFldw&fcv=3&async=term:Rettung,corpus:de,,hhdr:true,hwdgt:true,wfp:true,ttl:,tsl:,ptl:


	/*
	https://githubhot.com/repo/meetDeveloper/freeDictionaryAPI/issues/111

		Here is something you might want to try.

		Open https://www.google.com/search?q=google+dictionary in your web browser.

		Right-click on it and select Inspect from the pop-up menu. This will open "Developer Tools" screen.

		Select Network tab in Developer Tools.

		Enter a word in the edit box that says "Search for a word", but don't press ENTER yet.

		Press the trash can icon in Developer Tools to clear the network traffic logs.

		Now press ENTER. You should see the browser makes a call to https://www.google.com/async/callback:5493 with a long line of parameters.

		Look for 1) fc, 2) fcv, and 3) async in the long line of parameters.

		Update modules/dictionary.js in line 140 ~ 142. Note that _fmt:prog,_id:fc_15 at the end of async seem to cause a problem, so try without them first.*/

	let url = new URL('https://www.google.com/async/callback:5493');

	url.searchParams.set('fc', 'ErUBCndBTlVfTnFUN29LdXdNSlQ2VlZoWUIwWE1HaElOclFNU29TOFF4ZGxGbV9zbzA3YmQ2NnJyQXlHNVlrb3l3OXgtREpRbXpNZ0M1NWZPeFo4NjQyVlA3S2ZQOHpYa292MFBMaDQweGRNQjR4eTlld1E4bDlCbXFJMBIWU2JzSllkLVpHc3J5OVFPb3Q2aVlDZxoiQU9NWVJ3QmU2cHRlbjZEZmw5U0lXT1lOR3hsM2xBWGFldw');
	url.searchParams.set('fcv', '3');
	url.searchParams.set('async', `term:${encodeURIComponent(word)},corpus:${language},hhdr:true,hwdgt:true,wfp:true,ttl:,tsl:,ptl:`);

	url = url.toString();

	let info = { word, language };

	let body = await fetch.fetchTextFromHttpUrl(url,
		{
			"accept": "*/*",
			"accept-encoding": "gzip, deflate, br",
			"accept-language": "en-US,en," + language + ";q=0.9",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"
		},
		info
	);
	let data = JSON.parse(body.substring(4));

	let single_results = _.get(data, 'feature-callback.payload.single_results', []),
		error = _.chain(single_results)
			.find('widget')
			.get('widget.error')
			.value()

	if (single_results.length === 0) { throw new errors.NoDefinitionsFound(info); }

	if (error === 'TERM_NOT_FOUND_ERROR') { throw new errors.NoDefinitionsFound(info); }

	if (error) { throw new errors.UnexpectedError({ error }); }

	return single_results;
}

exports.findDefinitions = async function (word, language, { include }) {
	let dictionaryData = await fetchFromSource(word, language);

	if (_.isEmpty(dictionaryData)) { throw new errors.UnexpectedError(); }

	return transform(word, language, dictionaryData, { include });
}

//module.exports = {
//	findDefinitions,
//	transformV2toV1
//};
