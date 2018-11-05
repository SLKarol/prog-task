import React, { Component } from "react";
import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import delayText from "./../lib/asynchrony/delayText";
import SourceCode from "./../CommonComponents/SourceCode.jsx";

class DelayText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      delayTime: 0,
      working: false,
      resultWork: ""
    };
  }
  handlerChangeText = event => {
    this.setState({ text: event.target.value });
  };
  handlerChangeDelay = event => {
    this.setState({ delayTime: event.target.value * 1 });
  };

  handlerClickPromise = _ => {
    const { text, delayTime } = this.state;
    if (delayTime >= 0) {
      this.setState({ working: true, resultWork: "" }, _ => {
        let result = delayText(delayTime, text);
        result.then(resultWork => {
          this.setState({ working: false, resultWork });
        });
      });
    }
  };
  render() {
    const { location } = this.props;
    const { text, delayTime, working, resultWork } = this.state;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Текст с задержкой</h3>С использованием{" "}
          <strong>Promise</strong> напишите функцию delayText(timeout, result),
          которая отрезолвит результат result через timeout секунд.
          <div className="subform">
            <p>
              <label className="label">Текст, который нужно вывести</label>
              <input
                type="text"
                name="source-string"
                value={text}
                onChange={this.handlerChangeText}
              />
            </p>
            <p>
              <label className="label">Задержка, миллисекунд</label>
              <input
                type="number"
                min="0"
                step="0.1"
                name="delay"
                value={delayTime}
                onChange={this.handlerChangeDelay}
              />
            </p>
            <p>
              <label className="label" />
              <input
                type="button"
                value={working ? "Ждите" : "Сделать"}
                className="yellow-button"
                onClick={this.handlerClickPromise}
                disabled={working}
              />
            </p>
          </div>
          <div className="resultWork">
            <label className="res-label">Результат:</label> {resultWork}
          </div>
          <SourceCode
            solution={`function delayText(delay, text) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
  promise.then(result => {
    return result;
  });
  return promise;
}`}
          />
        </div>
      </div>
    );
  }
}
export default DelayText;
