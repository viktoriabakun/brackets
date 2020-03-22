module.exports = function check(str, bracketsConfig) {
  

  for (let i = 0; i < bracketsConfig.length;) {
      let brTogether = bracketsConfig[i].join('');

      if (str.includes(brTogether)) {
          str = str.replace(brTogether, '');
          i= 0;
      } else {
          i++;
      }
  }

  return str.length ? false : true;
}