import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";

import IsPalindromeFunc from "./../lib/string/IsPalindrome";

class IsPalindrome extends Component {
  constructor(props) {
    super(props);
    this.state = { source: "", result: "" };
  }
  handlerChangeSource = event => {
    const inputValue = event.target.value;
    const result = IsPalindromeFunc(inputValue) ? "Палиндром" : "Не палиндром";
    this.setState({ source: inputValue, result });
  };
  render() {
    const { location } = this.props;
    const { source, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Проверка на палиндром</h3>
          Слова, фразы...
          <div className="subform">
            <p>
              <label className="label">Исходное слово</label>
              <input
                type="text"
                name="source-string"
                value={source}
                onChange={this.handlerChangeSource}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label>
            <span>{result}</span>
          </div>
          <SourceCode
            solution={`function IsPalindrome(phrase) {
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
}`}
          />
        </div>
      </div>
    );
  }
}
export default IsPalindrome;
