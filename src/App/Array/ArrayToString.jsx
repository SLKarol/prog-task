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
Преобразование массива [1,2,{now: true}]
в строку "[1,2,{now: true}]"
ВНИМАНИЕ.
Перед использованием убедитесь, что моя функция ObjectToString подключена.
*/
function ArrayToString(valueArray) {
  var re = [];
  valueArray.forEach(function (element) {
    if (typeof element === 'object') {
      re.push(ObjectToString(element));
    } else {
      re.push(element.toString());
    }
  });
  return "[".concat(re.join(', '), "]");
}`}
          />
        </div>
      </div>
    );
  }
}
export default ToString;
