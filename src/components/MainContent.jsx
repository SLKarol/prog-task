import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ROUTES from "../Routes";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = { modules: [] };
  }
  componentDidMount() {
    let modules = [];
    ROUTES.forEach(m => {
      modules.push({
        path: m.path,
        exact: m.exact,
        component: m.component
      });
      //--- Получить подчинённые записи (первого уровня, конечно)
      if (m.routes) {
        m.routes.forEach(r => {
          modules.push({
            path: r.path,
            component: r.component
          });
        });
      }
    });
    this.setState({ modules });
  }
  render() {
    const { modules } = this.state;
    return (
      <div className="main-content">
        <Switch>
          {modules.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={true}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    );
  }
}
export default MainContent;
