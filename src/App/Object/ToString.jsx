import React, { Component } from "react";

import BreadCrumbs from "./../CommonComponents/BreadCrumbs.jsx";
import SourceCode from "./../CommonComponents/SourceCode.jsx";

class ToString extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <BreadCrumbs location={location} />
        <div className="content-page">
          <h3 className="selected-menu">Простой способ ToString</h3>
          Будет только текст функции. Не пугайтесь множеством <em>concat</em> -
          это преобразователь так сделал. На самом деле в исходном тексте
          используется вся красота и мощь ES6.
          <SourceCode
            solution={`/*
Преобразование объекта, например {home: 1, street: 'Мира'}
в строку "home: 1, street: 'Мира'"
*/
function ObjectToString(value) {
  var re = Object.keys(value).map(function (key) {
    return "".concat(key, ": ").concat(typeof value[key] === 'string' ? "'".concat(value[key], "'") : "".concat(value[key]));
  });
  return "{".concat(re.join(', '), "}");
}`}
          />
        </div>
      </div>
    );
  }
}
export default ToString;
