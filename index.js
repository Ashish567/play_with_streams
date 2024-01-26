console.log("hello streams");
// Code for non-flowing readable mode.
process.stdin.on("readable", () => {
  let chunk;
  console.log("New data available!");
  while ((chunk = process.stdin.read()) !== null) {
    console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
  }
});
