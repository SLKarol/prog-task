import React, { Component } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

class IndexNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = { subModules: [] };
  }
  componentDidMount() {
    //--- Получить подчиненные ссылки
    const subModules = ROUTES.find(m => m.path === "/network").routes;
    this.setState({ subModules });
  }
  render() {
    const { subModules } = this.state;
    return (
      <article>
        <ul className="bread-crumbs">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>Number</li>
        </ul>
        <div className="content-page">
          <h2 className="selected-menu">Network</h2>
          Примеры работы с сетью- как правило с интернет, промисы, фетчи и т.п.
          Можно было бы назвать этот раздел Асинхроном, но это название чем-то
          Марвелл напоминает :-)
          <ul className="select-action">
            {subModules.map(module => (
              <li key={module.path}>
                <Link to={module.path}>{module.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  }
}
export default IndexNetwork;
