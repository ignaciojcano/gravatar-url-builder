const test = require("tape");
const lib = require("../lib");

test("It does something", t => {
  t.plan(1);
  t.equal(lib(), "hi");
});
