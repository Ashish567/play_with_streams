import { Transform } from "stream";

export class TotalDocsProcessed extends Transform {
  constructor(options = {}) {
    super({
      ...options,
      writableObjectMode: true,
      readableObjectMode: true,
    });
    this.total = 0;
  }

  _transform(record, encoding, cb) {
    this.total++;
    cb();
  }

  _flush(cb) {
    this.push(this.total.toString());
    cb();
  }
}
