const fs = require("fs");

// args: filename...
function randomAccessFile(path, flags = "r", mode = undefined) {
  // better ::
  let result = fs.readFileSync(path);

  /*
    // very slow somewhy ::
    console.time("randomAccessFile "+path);
    let D = fs.openSync(path, flags, mode);
    let result = {
      read: function (offset, len) {
        let b = Buffer.alloc(len);
        fs.readSync(D, b, 0, len, offset);
        return b;
      },
      readUInt32BE: function (offset) {
        let b = this.read(offset, 4);
        return b.readUInt32BE();
      },
      toString: function (encoding, offset, end) {
        let b = this.read(offset, end-offset);
  
        let word = b.toString(encoding);
        return word;
      }
    };
    let s = fs.statSync(path);
    result.length = s.size;
    console.timeEnd("randomAccessFile "+path);
    //*/
  return result;
}

exports.writeBufferArray = function (filename, buffers) {
  var stream = fs.createWriteStream(filename, { flags: "w" });
  let size = 0;
  for (let buf of buffers) {
    size += stream.write(buf);
  }
  stream.end();
  return size;
};

exports.saveStarDict = function (filename, keys, byword, stardictprops = {}) {
  let wordindexbuf = [];
  let indexbuf = [];
  let dictbuf = [];
  let indexoffset = 0,
    dictoffset = 0;
  for (let word of keys) {
    //let word = buf.toString('utf-8', beg, i)
    //let offset = buf.readUInt32BE(i)
    //let size = buf.readUInt32BE(i)
    let worddata = byword[word];

    let json = JSON.stringify(worddata);

    let dictbuf1 = Buffer.from(json, "utf-8");

    let wordidxbuf1 = Buffer.alloc(4);
    wordidxbuf1.writeInt32BE(indexoffset);

    let wordbuf1 = Buffer.from(word, "utf-8");
    let indexbuf1 = Buffer.alloc(wordbuf1.byteLength + 9);
    indexbuf1.write(word, "utf-8");
    indexbuf1.writeInt32BE(dictoffset, wordbuf1.byteLength + 1);
    indexbuf1.writeInt32BE(dictbuf1.byteLength, wordbuf1.byteLength + 5);

    indexoffset += indexbuf1.byteLength;
    dictoffset += dictbuf1.byteLength;

    dictbuf.push(dictbuf1);
    indexbuf.push(indexbuf1);
    wordindexbuf.push(wordidxbuf1);
  }

  console.log("Write stardict " + filename);
  exports.writeBufferArray(filename + ".dict", dictbuf);
  let idxsize = exports.writeBufferArray(filename + ".idx", indexbuf);
  exports.writeBufferArray(filename + ".idx0", wordindexbuf);

  let ifo = 
`StarDict's dict ifo file
version=2.4.2
wordcount=${keys.length}
synwordcount=0
idxfilesize=${idxsize}
bookname=${stardictprops.bookname ? stardictprops.bookname : ""}
author=${stardictprops.author ? stardictprops.author : ""}
description=
sametypesequence=h
`;

  fs.writeFileSync(filename + ".ifo", ifo);
};

exports.loadStarDict = function (filename, isjson=true) {
  console.log("Read stardict " + filename);
  let noinput = 0;
  if (!fs.existsSync(filename + ".dict")) {
    console.log(filename + ".dict doesn't exist ");
    noinput = 1;
  }
  if (!fs.existsSync(filename + ".idx")) {
    console.log(filename + ".idx doesn't exist ");
    noinput = 1;
  }

  if (!noinput) {
    let wordindex0 = [];
    let wordindex_byword = {};

    let dictbuf = randomAccessFile(filename + ".dict");
    let indexbuf;

    console.time("processing primary index file " + filename + ".idx0");
    if (fs.existsSync(filename + ".idx0")) {
      justprefillindices();

      // isn't worth it not really random access : slow
      // so we read it all and cache it to static variable :
      readall();
    } else {
      console.log(filename + ".idx0 doesn't exist : creating !");
      let bs = [];
      prereadall(bs);
      exports.writeBufferArray(filename + ".idx0", bs);
    }

    if (!fs.existsSync(filename + ".ifo")) {
      console.log(filename + ".ifo doesn't exist : creating !");

      let ifo = 
`StarDict's dict ifo file
version=2.4.2
wordcount=${wordindex0.length}
synwordcount=0
idxfilesize=${indexbuf.length}
bookname=
author=
description=
sametypesequence=h
`;

      fs.writeFileSync(filename + ".ifo", ifo);
    }
    console.timeEnd("processing primary index file " + filename + ".idx0");

    function justprefillindices() {
      let wordindexbuf = randomAccessFile(filename + ".idx0");
      indexbuf = randomAccessFile(filename + ".idx");

      let i = 0;
      let prev = {};
      while (i < wordindexbuf.length) {
        let offset = wordindexbuf.readUInt32BE(i);
        prev.nextoffset = offset;
        wordindex0.push((prev = { offset }));

        i += 4;
      }
      prev.nextoffset = indexbuf.length;
    }

    function readall() {
      let result = [];
      for (let i = 0; i < wordindex0.length; i++) {
        let itm = get(i);
        result.push(itm);
      }
      return result;
    }

    function prereadall(bs = []) {
      wordindex0.push({ offset: 0 });
      indexbuf = fs.readFileSync(filename + ".idx");

      let last,
        i = 0;
      for (;;) {
        last = get(i++);
        let b = Buffer.alloc(4);
        b.writeUInt32BE(last.offset);
        bs.push(b);
        if (last.nextoffset < indexbuf.length) {
          wordindex0.push({ offset: last.nextoffset });
        } else {
          break;
        }
      }
    }

    function get(index) {
      let rec = wordindex0[index];

      if (!rec.data) {
        let beg = rec.offset;
        let word;

        let i;
        if (rec.nextoffset) {
          i = rec.nextoffset - 9;
        } else {
          i = indexbuf.indexOf("\x00", beg);
        }

        if (!i || i < 0) {
          throw new Error("Index file is corrupted.");
        }

        word = indexbuf.toString("utf-8", beg, i);

        i++;
        if (i + 8 > indexbuf.length) {
          throw new Error("Index file is corrupted.");
        }

        let offset = indexbuf.readUInt32BE(i);
        i += 4;
        let size = indexbuf.readUInt32BE(i);
        i += 4;

        let text = dictbuf.toString("utf-8", offset, offset + size);
        let worddata = isjson ? JSON.parse(text) : text;

        rec.word = word;
        rec.data = worddata;
        if (rec.nextoffset) {
          if (rec.nextoffset != i) {
            throw new Error("Index file is corrupted.");
          }
        } else {
          rec.nextoffset = i;
        }

        wordindex_byword[word] = rec;
      }

      return rec;
    }

    function cmp(wordrec1, wordrec2) {
      return wordrec1.word.localeCompare(wordrec2.word);
    }

    function find(word) {
      let itm;
      if ((itm = wordindex_byword[word])) {
        return itm;
      }

      let cmpdat = { word };

      let start = 0,
        end = wordindex0.length - 1;

      // Iterate while start not meets end
      while (start <= end) {
        // Find the mid index
        let mid = Math.floor((start + end) / 2);
        let mdat = get(mid);

        let c = cmp(mdat, cmpdat);
        // If element is present at mid, return True
        if (!c) return mdat;
        // Else look in left or right half accordingly
        else if (c < 0) start = mid + 1;
        else end = mid - 1;
      }

      return null;
    }
    function indexes() {
      return Object.keys(wordindex0);
    }
    return { ready: true, get, find, indexes, readall };
  }
  function returnnone() {
    return null;
  }
  function returnemp() {
    return [];
  }
  return {
    ready: false,
    find: returnnone,
    get: returnnone,
    indexes: returnemp,
    readall: returnemp
  };
};
