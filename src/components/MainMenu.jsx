import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../img/programmer2.png";
import ROUTES from "./../Routes";

class MainMenu extends PureComponent {
  constructor(props) {
    super(props);
    const LeftMemu = ROUTES
      .filter(r => r.LeftMenu)
      .map(r => ({ LeftMenu: r.LeftMenu, path: r.path }));
    this.state = { LeftMemu };
  }
  render() {
    const { LeftMemu } = this.state;
    return (
      <div className="main-menu">
        <div className="app-logo">
          <img src={LogoImg} alt="Логотип" />
          <h1>Сборник решений</h1>
        </div>
        <ul className="favorite-menu">
          <li>
            <Link to="/">Главная</Link>
          </li>
        </ul>
        <ul className="app-left-menu">
          {LeftMemu.map((menu, index) => (
            <li key={index}>
              <Link to={menu.path}>{menu.LeftMenu}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MainMenu;
