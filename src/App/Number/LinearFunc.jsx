import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";
import linearFunction from "./../lib/number/LinearFunction";
import Point from "./../lib/number/Point";

class LinearFunc extends Component {
  constructor(props) {
    super(props);
    this.state = { source: "", result: "" };
  }
  handlerChangeSource = event => {
    const inputValue = event.target.value;
    let result = "";
    if (
      inputValue[0] === "(" &&
      inputValue[inputValue.length - 1] === ")" &&
      inputValue.match(/\(/g).length === 2 &&
      inputValue.match(/\)/g).length === 2
    ) {
      const stringPoint1 = inputValue.substr(0, inputValue.indexOf(")") + 1);
      const stringPoint2 = inputValue.replace(stringPoint1, "").trim();
      const point1 = new Point(stringPoint1);
      const point2 = new Point(stringPoint2);
      result = linearFunction(point1, point2);
      result = `a=${result.a} ; b=${result.b}`;
    }
    this.setState({ source: inputValue, result });
  };
  render() {
    const { location } = this.props;
    const { source, result } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Линейная функция</h3>
          Линейная функция определяется уравнением:
          <br />
          <strong>y(x) = ax + b</strong>
          <br />
          Где <strong>a</strong> и <strong>b</strong> - параметры.
          <br />
          Например, при <strong>a=3, b=2</strong> функция выдаёт значения{" "}
          <strong>y = 2, 5, 8, 11...</strong> для{" "}
          <strong>x = 0, 1, 2, 3...</strong>
          <br />
          Наша задача определить неизвестные параметры <strong>a</strong> и{" "}
          <strong>b</strong> по двум имеющимся точкам. Т.е. даны две пары
          значений <strong>(x1, y1), (x2, y2)</strong> которые удовлетворяют
          уравнению - и нам это уравнение нужно "восстановить".
          <div className="subform">
            <p>
              <label className="label">
                Пара значений
                <br />
                (x1, y1) (x2, y2)
              </label>
              <input
                type="text"
                name="source-string"
                value={source}
                onChange={this.handlerChangeSource}
                placeholder={"(x1, y1) (x2, y2)"}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label>
            <span>{result}</span>
          </div>
          <SourceCode
            solution={`const Point = function () {
  // Получил два числа
  if (arguments.length === 2) {
    this.x = arguments[0];
    this.y = arguments[1];
  }
  // Получил строку
  if (arguments.length === 1 && typeof arguments[0] === 'string') {
    let value = arguments[0];
    if (value[0] === '(') {
      value = value.replace('(', '').replace(')', '').split(',');
    }
    this.x = value[0] * 1;
    this.y = value[1] * 1;
  }
}
function LinearFunction(point1, point2) {
  // Умножить первую пару чисел на -1
  const p11 = new Point(-1 * point1.x, -1 * point1.y);
  /* Cкладывая два уравнения, избавимся от b,
  приведя к уравнению с одной неизвестной:
  y=x*a
  */
  const a = (p11.y + point2.y) / (p11.x + point2.x);
  const b = point1.y - a * point1.x;
  return {
    a,
    b
  };
}`}
          />
        </div>
      </div>
    );
  }
}
export default LinearFunc;
