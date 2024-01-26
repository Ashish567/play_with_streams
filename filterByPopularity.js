import { Transform } from "stream";

export class FilterByPopularity extends Transform {
  constructor(popularity, options = {}) {
    super({ ...options, objectMode: true });
    this.popularity = popularity;
  }

  _transform(record, encoding, cb) {
    if (this.popularity <= record.popularity) {
      const buff = Buffer.from(JSON.stringify(record));
      this.push(buff);
    }
    cb();
  }
}
