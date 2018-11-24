import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import countVovels from './../lib/string/countVovels';
import ArrayToString from './../lib/array/ArrayToString';

class CountVovels extends Component {
  constructor(props) {
    super(props);
    this.state = { source: "", result: "" };
  }
  handlerChangeSource = event => {
    const inputValue = event.target.value;
    const res=countVovels(inputValue);
    const result = ArrayToString(res);
    this.setState({ source: inputValue, result });
  };
  render() {
    const { location } = this.props;
    const { source, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Статистика гласных букв в слове</h3>
          Исходное слово: "тестовая строка"
          <br />
          Результат:
          <SyntaxHighlighter language="javascript" style={coy}>
            {`{letter: 'а', count: 2}, {letter: 'е', count: 1}, {letter: 'о', count: 2}, {letter: 'я', count: 1}`}
          </SyntaxHighlighter>
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
            <div>
              <label className="label">Результат</label>
              <SyntaxHighlighter language="javascript" style={coy}>{result}</SyntaxHighlighter>
            </div>
          </div>
          <SourceCode
            solution={`function countVovels(inputString) {
  const Vovels = 'аеёийоуыэюяaeiouy'.split('');
  let re = [];
  for (let i = 0; i < Vovels.length; i++) {
    let l = inputString.match(new RegExp(Vovels[i], "gi"));
    if (l) {
      re.push({
        letter: Vovels[i],
        count: l.length
      });
    }
  }
  return re;
}`}
          />
        </div>
      </div>
    );
  }
}
export default CountVovels;
