const server = require("./server");
const port = process.env.PORT || 3001;

server().listen(port, () => {
  console.log(`Simple Restfull API listening on port ${port}`);
});
