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

	/*
	/async/callback:5493?
	fc=EswBCowBQVBFMkdXQnFMVWhYcVpTTV9oeUFlbDFGVkFYYl94QlBLc0w2dVdFOGpJblNpaHFjRzlPWWpFMExvMENKcHZBMjZtY2otNnEyaUNXRUp4SWEydGFzSFpYRFRpNTJ6UkJ1Z0xYTXNBSkxkTjJyX1lod0M3TFdPLVNVeUlBaTBGOTFmNGlzT3c3Y0Q1cGISF1VVd1RZcHFzTHJDSTl1OFBpSzYzZ0FrGiJBRGpXXzNJSFVKQUMwWENfN3dCVk9zcjc3UHZmQno3LUVB
	&
	fcv=3
	&
	vet=12ahUKEwjamKq6r5D2AhUwhP0HHQjXDZAQg4MCegQIExAB..i
	&
	ved=2ahUKEwjamKq6r5D2AhUwhP0HHQjXDZAQu-gBegQIExAH
	&
	yv=3
	&
	oq=turning
	&
	gs_l=dictionary-widget.3..0l4.182563.184451.0.190263.7.7.0.0.0.0.119.626.6j1.7.0....0....1.64.dictionary-widget..0.7.626....0.FlLryQLJ8Ns
	&
	expnd=1
	&
	async=term:turning,corpus:en,hhdr:true,hwdgt:true,wfp:true,ttl:hu,tsl:en,ptl:hu,htror:false,_fmt:prog,_id:fc_2
	*/
	let translateTo = "";// "hu"
	// OLD
	//url.searchParams.set('fc', 'ErUBCndBTlVfTnFUN29LdXdNSlQ2VlZoWUIwWE1HaElOclFNU29TOFF4ZGxGbV9zbzA3YmQ2NnJyQXlHNVlrb3l3OXgtREpRbXpNZ0M1NWZPeFo4NjQyVlA3S2ZQOHpYa292MFBMaDQweGRNQjR4eTlld1E4bDlCbXFJMBIWU2JzSllkLVpHc3J5OVFPb3Q2aVlDZxoiQU9NWVJ3QmU2cHRlbjZEZmw5U0lXT1lOR3hsM2xBWGFldw');
	url.searchParams.set('fcv', '3');
	//url.searchParams.set('async', `term:${encodeURIComponent(word)},corpus:${language},hhdr:true,hwdgt:true,wfp:true,ttl:,tsl:,ptl:`);
	// NEW
	url.searchParams.set('fc', 'EswBCowBQVBFMkdXQnFMVWhYcVpTTV9oeUFlbDFGVkFYYl94QlBLc0w2dVdFOGpJblNpaHFjRzlPWWpFMExvMENKcHZBMjZtY2otNnEyaUNXRUp4SWEydGFzSFpYRFRpNTJ6UkJ1Z0xYTXNBSkxkTjJyX1lod0M3TFdPLVNVeUlBaTBGOTFmNGlzT3c3Y0Q1cGISF1VVd1RZcHFzTHJDSTl1OFBpSzYzZ0FrGiJBRGpXXzNJSFVKQUMwWENfN3dCVk9zcjc3UHZmQno3LUVB');
	//url.searchParams.set('fcv', '3');
	url.searchParams.set('async', `term:${encodeURIComponent(word)},corpus:${language},hhdr:true,hwdgt:true,wfp:true,ttl:${translateTo},tsl:${language},ptl:${translateTo},_id:fc_2`);//,htror:false,_fmt:prog

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

	//let callback = _.get(data, 'feature-callback', []);
	//let payload = _.get(data, 'feature-callback.payload', []);

	let single_results = _.get(data, 'feature-callback.payload.single_results', []);

	let error = _.chain(single_results)
		.find('widget')
		.get('widget.error')
		.value()

	if (single_results.length === 0) { throw new errors.NoDefinitionsFound(info); }

	if (error === 'TERM_NOT_FOUND_ERROR') { throw new errors.NoDefinitionsFound(info); }

	if (error) { throw new errors.UnexpectedError({ error }); }

	return single_results;
}

function transform(word, language, data, { include }) {

	function boxinflections(inflections_result) {

		if (!inflections_result) return undefined;

		let result = {};
		// head1 : noun_forms, ...
		for (let maingroup in inflections_result) {
			let maingroupleaves = inflections_result[maingroup];


			let featuretypes = {};
			// head2 : 0,1,2, ...
			for (let leaf of maingroupleaves) {
				// fid : case, gender, number
				for (let fid in leaf.features) {
					// f   : NOMINATIVE, FEMININE, SINGULAR
					let f = leaf.features[fid];
					let currenttype = featuretypes[fid];
					if (!currenttype) featuretypes[fid] = currenttype = {};

					currenttype[f] = 1;
				}
			}

			// group by gender, case, number
			// sections, columns, rows
			let groupby = [];
			// fid : case, gender, number
			for (let fid in featuretypes) {
				// features   : NOMINATIVE=>{}, FEMININE, SINGULAR
				let features = featuretypes[fid];
				let cnt = Object.keys(features).length;
				groupby.push({ fid, cnt });
			}
			groupby.sort((a, b) => {
				return a.cnt - b.cnt;
			});
			if (groupby.length>=3) {
				let head1 = groupby.splice(0, 1);
				groupby.reverse();
				groupby.unshift(head1[0]);
			}

			let groupChildren = (parentgroup, level) => {

				if (level < groupby.length) {
					let fpair = groupby[level];
					let section = {};
					let childgroups = {};

					for (let leaf of parentgroup) {
						let f = leaf.features[fpair.fid];
						let cursect = childgroups[f];
						if (!cursect) {
							childgroups[f] = cursect = [leaf];
						} else {
							cursect.push(leaf);
						}
					}
					for (let ch in childgroups) {
						let childgroup = childgroups[ch];

						let group = groupChildren(childgroup, level+1);
						section[ch] = group;
					}
					return section;
				} else {
					let result = [];
					for (let leaf of parentgroup) {
						let text = leaf.text ? leaf.text :
							[leaf.preceding_text,leaf.form_text].join(" ");
						result.push(text);
					}
					return result;
				}
			}

			let root = groupChildren(maingroupleaves, 0);

			groupby = groupby.map(e=>e.fid);
			result[maingroup] = {groupby, root};
		}
		return result;
	}

	try {
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
			let { headword, lemma, phonetics = [], etymology = {}, sense_families = [], thesaurus_result = [], inflections_result } = entry;

			//let { headword, lemma, homograph_index } = thesaurus_result;
			let synonymsGroup = _.get(thesaurus_result,
				'synonyms_group.0.nyms', []).map(stuff => stuff.nym_headword);
			let originContents = _.get(etymology,
				'etymology.fragments', []).
				filter(e => e.is_entry_link).map(stuff => stuff.text);
			let inflections = boxinflections(inflections_result);

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
				inflections,
				originContents,
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
	} catch (e) {
		console.log(e);
		throw e;
	}
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
