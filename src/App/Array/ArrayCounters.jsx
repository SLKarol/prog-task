import React, { Component } from "react";

import arrayCounters from "./../lib/array/arrayCounters";
import ArrayToString from "./../lib/array/ArrayToString";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";

class ArrayCounters extends Component {
  constructor(props) {
    super(props);
    this.state = { lengthArray: 0, maxNumber: 1, result: [], testArray: [] };
  }
  handlerChangeLengthArray = event => {
    const lengthArray = 1 * event.target.value;
    this.setState({ lengthArray }, _ => {
      this.calcResult();
    });
  };
  handlerChangeMaxNumber = event => {
    const maxNumber = 1 * event.target.value;
    this.setState({ maxNumber }, _ => {
      this.calcResult();
    });
  };
  calcResult = _ => {
    const { lengthArray, maxNumber } = this.state;
    let result = [];
    let testArray = [];
    if (lengthArray > 0 && maxNumber > 0) {
      //--- Создать массив из случайных чисел от 1 до maxNumber
      for (let i = 1; i <= lengthArray; i++) {
        testArray.push(Math.trunc(maxNumber * Math.random() + 1));
      }
      result = arrayCounters(testArray, maxNumber);
    }
    this.setState({ result, testArray });
  };

  render() {
    const { location } = this.props;
    const { lengthArray, maxNumber, result, testArray } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Array Counters</h3>
          Дан массив длины <b>M</b> с числами в диапазоне <b>1 ... N</b>, где <b>N</b> не больше <b>20</b>.
          Нужно пройти по этому массиву и сосчитать сколько раз встречается
          каждое число.<br/>В итоге должен получиться новый массив длиной <b>N</b>, где первое число массива - сколько раз встречается число <b>1</b>, второе число - сколько раз встречается число <b>2</b> и т.д. до <b>N</b>.
          <div className="subform">
            <p>
              <label className="label">Длина массива</label>
              <input
                name="lenarray"
                type="number"
                min="1"
                step="1"
                value={lengthArray}
                onChange={this.handlerChangeLengthArray}
              />
            </p>
            <p>
              <label className="label">Максимальное число в этом массиве</label>
              <input
                name="maxnumber"
                type="number"
                min="1"
                max="20"
                step="1"
                value={maxNumber}
                onChange={this.handlerChangeMaxNumber}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label>
            <span>
              Сгенерированный массив:{" "}
              <strong>{ArrayToString(testArray)}</strong>, результат:{" "}
              <strong>{ArrayToString(result)}</strong>
            </span>
          </div>
          <SourceCode
            solution={`function arrayCounters(arrayCheck, maxNumber) {
  let resultArray = [];
  for (let i = 1; i <= maxNumber; i++) {
    resultArray.push(arrayCheck.filter(f => f === i).length);
  }
  return resultArray;
}`}
          />
        </div>
      </div>
    );
  }
}
export default ArrayCounters;
