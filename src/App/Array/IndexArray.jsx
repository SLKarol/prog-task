import React, { Component } from "react";
import { Link } from "react-router-dom";
import ROUTES from "./../../Routes";

class IndexObject extends Component {
  constructor(props) {
    super(props);
    this.state = { subModules: [] };
  }
  componentDidMount() {
    //--- Получить подчиненные ссылки
    const subModules = ROUTES.find(m => m.path === "/array").routes;
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
          <li>Array</li>
        </ul>
        <div className="content-page">
          <h2 className="selected-menu">Array</h2>
          Примеры ниже имеют отношение к Массивам.
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
export default IndexObject;
