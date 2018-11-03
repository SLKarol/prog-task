import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import SumTwoNumber from './../lib/number/SumTwoNumber';

class SummTwoNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = { source: "", result: "" };
  }
  handlerChangeSource = event => {
    const inputValue = event.target.value;
    const result = SumTwoNumber(inputValue);
    this.setState({ source: inputValue, result });
  };
  render() {
    const { location } = this.props;
    const { source, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Сумма двух чисел</h3>
          Вводится строка, в которой через пробел находятся числа. Посчитать сумму этих чисел.
          <div className="subform">
            <p>
              <label className="label">Строка с числами</label>
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
            solution={`function SumTwoNumber(value) {
  const tempArray = value.split(' ');
  if (tempArray.length !== 2) {
    return null;
  }
  if(tempArray[0]==='' || tempArray[1]===''){
    return null;
  }
  return (1*tempArray[0])+(1*tempArray[1]);
}`}
          />
        </div>
      </div>
    );
  }
}
export default SummTwoNumbers;
