import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

class BreadCrumbs extends PureComponent {
  InfoModule = _ => {
    const { location } = this.props;
    const { pathname } = location;
    const arrayCurrentPath = pathname.split("/");
    const parentModule = ROUTES.find(
      m => m.path === "/" + arrayCurrentPath[1] && m.LeftMenu
    );
    const name = parentModule.routes.find(m => m.path === pathname).name;
    return {
      parentPath: parentModule.path,
      leftMenu: parentModule.LeftMenu,
      name
    };
  };
  render() {
    const InfoModule = this.InfoModule();
    return (
      <ul className="bread-crumbs">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to={InfoModule.parentPath}>{InfoModule.leftMenu}</Link>
        </li>
        <li>{InfoModule.name}</li>
      </ul>
    );
  }
}

export default BreadCrumbs;
