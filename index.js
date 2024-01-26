console.log("hello streams");
// Code for non-flowing readable mode. Data is pulled using read() method
// process.stdin.on("readable", () => {
//   let chunk;
//   console.log("New data available!");
//   while ((chunk = process.stdin.read()) !== null) {
//     console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
//   }
// });

// Code for flowing mode. Data is pulled on "data event".
// process.stdin
//   .on("data", (chunk) => {
//     console.log("New data available!");
//     console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
//   })
//   .on("end", () => {
//     console.log("End of Stream.");
//   });
