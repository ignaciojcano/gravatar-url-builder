const md5 = require('md5');
const { URL } = require('url');

module.exports = (email, options = {}) => {
  const baseUrl = "https://www.gravatar.com/avatar";
  const hash = md5(email.trim().toLowerCase());
  const url = new URL(`${baseUrl}/${hash}`);
  if(options.size){
    url.searchParams.append('s', options.size);
  }

  if(options.default) {
    url.searchParams.append('d', options.default)
  }
  console.log(url.toString());
  return url.toString();
};
