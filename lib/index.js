const md5 = require('md5')
module.exports = (email, options = {}) => {
  const baseUrl = "https://www.gravatar.com/avatar";
  const hash = md5(email.trim().toLowerCase());
  return `${baseUrl}/${hash}`;
};
