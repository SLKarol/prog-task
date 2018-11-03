import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/styles/prism";

import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import countChars from "./../lib/string/countChars";
import ObjectToString from "./../lib/object/ObjectToString";

class CountChars extends Component {
  constructor(props) {
    super(props);
    this.state = { source: "", result: "" };
  }
  handlerChangeSource = event => {
    const inputValue = event.target.value;
    const result = countChars(inputValue);
    const res = ObjectToString(result);
    this.setState({ source: inputValue, result: res });
  };
  render() {
    const { location } = this.props;
    const { source, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Количество букв в слове</h3>
          Исходное слово: "abddfghgrab"
          <br />
          Результат:{" "}
          <SyntaxHighlighter
            language="javascript"
            style={coy}
          >{`{a:2,b:2,d:2,f:1,g:2,h:1,r:1}`}</SyntaxHighlighter>
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
            <label className="res-label">Результат</label>
            <SyntaxHighlighter language="javascript" style={coy}>
              {result}
            </SyntaxHighlighter>
          </div>
          <SourceCode
            solution={`function countChars(inputString) {
  let re = {};
  for (let i = 0; i < inputString.length; i++) {
    let t = inputString[i];
    if (Object.keys(re).find(q => q === t)) {
      re[t]++;
    } else {
      re[t] = 1;
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
export default CountChars;
