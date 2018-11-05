import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import ExistTriangle from "./../lib/number/ExistTriangle";

class CheckExistTriangle extends Component {
  constructor(props) {
    super(props);
    this.state = { lines: "", result: "" };
  }
  handlerChangeLine = (event, line) => {
    const inputValue = event.target.value;
    let newTriangle = { lines: inputValue, result: "" };
    const numbers = inputValue.split(" ").map(n => n * 1);
    if (
      numbers.length === 3 &&
      typeof numbers.find(v => v <= 0) === "undefined"
    ) {
      newTriangle.result = ExistTriangle(...numbers)
        ? "Треугольник существует"
        : "Треугольник не существует";
    }
    this.setState({ ...newTriangle });
  };
  render() {
    const { location } = this.props;
    const { lines, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">
            Проверка существования треугольника по трем сторонам
          </h3>
          Введите стороны треугольника через пробел
          <div className="subform">
            <p>
              <label className="label">Стороны треугольника</label>
              <input
                name="lines"
                type="text"
                value={lines}
                onChange={event => this.handlerChangeLine(event, "A")}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label>
            <span>{result}</span>
          </div>
          <SourceCode
            solution={`function ExistTriangle(a, b, c) {
  return a < b + c && b < a + c && c < a + b;
}`}
          />
        </div>
      </div>
    );
  }
}
export default CheckExistTriangle;
