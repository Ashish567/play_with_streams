import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { parse } from "csv-parse";
import { FilterByPopularity } from "./filterByPopularity.js";
import { TotalDocsProcessed } from "./totalDocsProcessed.js";
import { PassThrough, pipeline } from "stream";
import Pumpify from "pumpify";
import MultiStream from "multistream";

// import { Transform } from "stream";

const csvParser = parse({
  columns: true,
  relax_quotes: true,
  escape: "\\",
  autoParse: true,
  encoding: "utf-8",
});
let bytesWritten = 0;
const moniter = new PassThrough();
moniter.on("data", (chunk) => {
  bytesWritten += chunk.length;
});
moniter.on("finish", () => {
  console.log(`${bytesWritten} Bytes Written.`);
});
moniter.write("Ended!");
moniter.end();
// console.log(path.resolve("./datasets/genres.csv"));

// createReadStream(path.resolve("./datasets/shows.csv"))
//   .pipe(csvParser)
//   .pipe(new FilterByPopularity(200))
//   .pipe(new TotalDocsProcessed())
//   //   .pipe(createWriteStream("output.txt"));
//   .pipe(moniter)
//   .pipe(process.stdout);

pipeline(
  createReadStream(path.resolve("./datasets/shows.csv")),
  csvParser,
  new FilterByPopularity(200),
  new TotalDocsProcessed(),
  //   moniter,
  process.stdout,
  (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  }
);
