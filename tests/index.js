const test = require("tape");
const lib = require("../lib");

test("It creates gravatar urls with the given options", t => {
  t.plan(4);
  t.equal(
    lib("ignacioj.cano@gmail.com"),
    "https://www.gravatar.com/avatar/a4d86421317a533a4b8dcdeda3e5ebd8"
  );
  t.equal(lib("ignacioj.cano@gmail.com", {size: 200}), "https://www.gravatar.com/avatar/a4d86421317a533a4b8dcdeda3e5ebd8?s=200");
  t.equal(lib("ignacioj.cano@gmail.com", {default: 'monsterid'}), "https://www.gravatar.com/avatar/a4d86421317a533a4b8dcdeda3e5ebd8?d=monsterid")
  t.equal(lib("ignacioj.cano@gmail.com", {default: 'monsterid', size: 200}),"https://www.gravatar.com/avatar/a4d86421317a533a4b8dcdeda3e5ebd8?s=200&d=monsterid")
});
