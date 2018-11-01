import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";

import reverseString from "./../lib/string/reverseString";

class ReverseString extends Component {
  constructor(props) {
    super(props);
    this.state = { source: "", result: "" };
  }
  handlerChangeSource = event => {
    const inputValue = event.target.value;
    const result = reverseString(inputValue);
    this.setState({ source: inputValue, result });
  };
  render() {
    const { location } = this.props;
    const { source, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Reverse strings</h3>
          &quot;Разворот&quot; слова.
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
            <p>
              <label className="label">Результат</label>
              <span>{result}</span>
            </p>
          </div>
          <SourceCode solution={reverseString.toString()} />
        </div>
      </div>
    );
  }
}
export default ReverseString;
