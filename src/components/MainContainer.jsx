import React, { Component } from "react";
import MainContent from "./MainContent";
import MainMenu from "./MainMenu";

class MainContainer extends Component {
  render() {
    return (
      <div className="container-master-page">
        <MainContent />
        <MainMenu />
      </div>
    );
  }
}
export default MainContainer;
