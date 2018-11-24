import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import gcd from './../lib/number/gcd';
import lcm from './../lib/number/lcm';

class GcdLcm extends Component {
  constructor(props) {
    super(props);
    this.state = { source: '', gcdCalc: null, lcmCalc:0 };
  }
  handlerChangeSource = (event, line) => {
    const source = event.target.value;
    let gcdCalc=null;
    let lcmCalc=null;
    const tempArray=source.split(' ');
    if(tempArray.length>=2 && tempArray[0].length>0 && tempArray[1].length>0){
      gcdCalc=gcd(...tempArray);
      lcmCalc=lcm(...tempArray);      
    }
    this.setState({source, gcdCalc, lcmCalc});
  };
  render() {
    const { location } = this.props;
    const { source, gcdCalc, lcmCalc } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">
            НОД и НОК
          </h3>
          Введите два числа через пробел
          <div className="subform">
            <p>
              <label className="label">Два числа</label>
              <input
                name="source"
                type="text"
                value={source}
                onChange={this.handlerChangeSource}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label>
            <span><strong>НОД: </strong>{gcdCalc} ; <strong>НОК: </strong>{lcmCalc}</span>
          </div>
          <SourceCode
            solution={`function gcd(...args) {
  // НОД
  const recurseDiv = (a, b) => {
    let r = a % b;
    if (r === 0) {
      return b;
    } else {
      return recurseDiv(b, r);
    }
  }
  let inputNumbers = args.sort();
  const re = recurseDiv(1*inputNumbers[1], 1*inputNumbers[0]);
  return re;
}

function lcm(a, b) {
  // НОК
  return (a * b) / gcd(a, b);
}`}
          />
        </div>
      </div>
    );
  }
}
export default GcdLcm;
