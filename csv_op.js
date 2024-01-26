import { createReadStream } from "fs";
import path from "path";
import { parse } from "csv-parse";
import { FilterByPopularity } from "./filterByPopularity.js";
// import { Transform } from "stream";

const csvParser = parse({
  columns: true,
  relax_quotes: true,
  escape: "\\",
  //   ltrim: true,
  //   rtrim: true,
});
// console.log(path.resolve("./datasets/genres.csv"));

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

createReadStream(path.resolve("./datasets/shows.csv"))
  .pipe(csvParser)
  .pipe(new FilterByPopularity(200))
  .pipe(process.stdout);
