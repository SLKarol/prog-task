import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import bmi from "./../lib/number/bmi";

class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", weight: "", bmiCalc: {} };
  }
  handlerChangeSource = (event, type) => {
    const value = event.target.value;
    let newState = this.state;
    newState[type] = value;
    if (newState.height.length > 0 && newState.weight.length > 0) {
      newState.bmiCalc = bmi(newState.height, newState.weight);
    } else {
      newState.bmiCalc = {};
    }
    this.setState({ ...newState });
  };
  render() {
    const { location } = this.props;
    const { weight, height, bmiCalc } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Индекс массы тела</h3>В 19 веке была
          предложена несложная мера "относительной упитанности" тела человека.
          Она вычисляется на основании только роста и веса, и называется Индекс
          Массы Тела (Body Mass Index = BMI). Определяется она как вес делённый
          на рост в квадрате
          <div className="subform">
            <p>
              <label className="label">Вес (кг)</label>
              <input
                type="number"
                value={weight}
                onChange={e => this.handlerChangeSource(e, "weight")}
              />
            </p>
            <p>
              <label className="label">Рост (см)</label>
              <input
                type="number"
                value={height}
                onChange={e => this.handlerChangeSource(e, "height")}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label>
            <span>
              <strong>Индекс: </strong>
              {bmiCalc.index} ; <strong>Значение: </strong>
              {bmiCalc.rus}
            </span>
          </div>
          <SourceCode
            solution={`function bmi(height, weight) {
  const heightInM=height/100;
  const index = Math.round((weight / Math.pow(heightInM, 2)) * 10) / 10;
  let re = {
    index
  };
  switch (true) {
    case index < 18.5:
      re.eng = 'Underweight';
      re.rus = 'Недостаточная масса';
      break;
    case index >= 25 && index < 30:
      re.eng = 'Overweight';
      re.rus = 'Избыточная масса';
      break;
    case index >= 30:
      re.eng = 'Obesity';
      re.rus = 'Ожирение';
      break;
    default:
      re.eng = 'Normal weight';
      re.rus = 'Норма';
      break;
  }
  return re;
}`}
          />
        </div>
      </div>
    );
  }
}
export default Bmi;
