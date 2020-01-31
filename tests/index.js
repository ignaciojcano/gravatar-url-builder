const test = require("tape");
const lib = require("../lib");

test("It creates a gravat url for a given email", t => {
  t.plan(1);
  t.equal(
    lib("ignacioj.cano@gmail.com"),
    "https://www.gravatar.com/avatar/a4d86421317a533a4b8dcdeda3e5ebd8"
  );
});
