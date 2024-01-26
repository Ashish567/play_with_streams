import { Transform } from "stream";

export class FilterByPopularity extends Transform {
  constructor(popularity, options = {}) {
    super({
      ...options,
      writableObjectMode: true,
      readableObjectMode: true,
    });
    this.popularity = popularity;
  }

  _transform(record, encoding, cb) {
    if (this.popularity <= record.popularity) {
      this.push(JSON.stringify(record));
    }
    cb();
  }
}

// const transform = new Transform({
//   objectMode: true,
//   transform(chunk, encoding, callback) {
//     try {
//       // callback this must be call to continue
//       const buff = Buffer.from(JSON.stringify(chunk));
//       console.log("transform", buff);
//       callback(null, buff);
//     } catch (error) {
//       callback(error);
//     }
//   },
// });
