import React, { Component } from "react";

import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import matchingBrackets from "./../lib/string/matchingBrackets";

class MatchingBrackets extends Component {
  constructor(props) {
    super(props);
    this.state = { source: "", result: "" };
  }
  handlerChangeSource = event => {
    const source = event.target.value;
    const result = matchingBrackets(source);
    this.setState({ source, result });
  };
  render() {
    const { location } = this.props;
    const { source, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Matching Brackets</h3>
          Нам даны строки, содержащие скобки 3 видов - круглые{" "}
          <strong>( )</strong>, квадратные <strong>[ ]</strong>&#160; и фигурные{" "}
          <strong>&#123; &#125;</strong>. Задача в том, чтобы проверить является
          ли последовательность скобок корректной. Т.е. любая открывающая скобка
          должна иметь закрывающую того же типа где-то дальше по строке - и
          кроме того пары скобок не должны пересекаться, хотя они могут быть
          вложенными
          <div className="subform">
            <p>
              <label className="label">Исходная строка</label>
              <input
                type="text"
                name="source-string"
                value={source}
                onChange={this.handlerChangeSource}
              />
            </p>
            <div>
              <label className="label">Результат</label>
              {source.length > 0
                ? result
                  ? "строка корректа"
                  : "строка не корректа"
                : ""}
            </div>
            <SourceCode
              solution={`function matchingBrackets(str) {
const pattern = /[^()\[\]{}]/g;
let checkString = ("" + str).replace(pattern, "");
let bracket = {
  "]": "[",
  "}": "{",
  ")": "("
};
let openBrackets = [];
let isClean = true;  
for (let i = 0; isClean && i < checkString.length; i++) {
  if (bracket[checkString[i]]) {
    isClean = (openBrackets.pop() === bracket[checkString[i]]);
  } else {
    openBrackets.push(checkString[i]);
  }
}
return isClean && !openBrackets.length;
}`}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MatchingBrackets;
