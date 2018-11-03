function IsPalindrome(phrase) {
  // Удалить пробелы, запятые и т.п.
  const clearPhrase = phrase.replace(/ /g, '')
    .replace(/,/g, '').replace(/\./g, '').replace(/-/g, '')
    .replace(/!/g, '').replace(/\?/, '').replace(/'/g, '')
    .replace(/"/g, '').toLowerCase();
  /* Я знаю два способа проверки: 
  1. Реверсировать строку и сравнить с иходной;
  2. Сравнивать посимвольно от начала и конца строки, они должны быть равны.
  Здесь будет второй способ. */

  // Для ускорения работы, запомнить длину строки
  const lenPhrase = clearPhrase.length;
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

export default IsPalindrome;