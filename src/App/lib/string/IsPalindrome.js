'use strict';
const reverseString = require('./reverseString');
let IsPalindrome = function (phrase) {
  // Удалить пробелы
  const clearPhrase = phrase.replace(/ /g, '')
    .replace(/,/g, '').replace(/\./g, '').replace(/-/g, '')
    .replace(/!/g, '').replace(/\?/, '').replace(/'/g, '')
    .replace(/"/g, '').toLowerCase();
  // Для ускорения работы
  const lenPhrase = clearPhrase.length;
  // Суть скрипта
  if (lenPhrase === 0) {
    return false;
  }
  for (let i = 0; i < Math.floor(lenPhrase / 2); i++) {
    if (clearPhrase[i] !== clearPhrase[lenPhrase - i - 1]) {
      return false;
    }
  }
  return true;
};

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = IsPalindrome;
}
