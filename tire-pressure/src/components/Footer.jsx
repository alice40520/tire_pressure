import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg justify-content-between navbar-collapse">
          <span className="border mr-auto">Virgule Taiwan</span>
          <span className="border mr-auto">遠端胎壓監測管理系統</span>
          <span className="border ml-auto">
            Copyright &#169; Point Virgule 柏一威都 版權所有
          </span>
        </nav>
      </div>
    );
  }
}

export default Footer;
