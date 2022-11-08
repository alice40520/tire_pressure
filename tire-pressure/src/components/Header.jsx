import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {
    options: [
      { display: "車種目錄", id: "o0", href: "/overview" },
      { display: "拖車總覽", id: "o1", href: "/truckoOverview" },
      { display: "大型卡車總覽", id: "o2", href: "" },
      { display: "小型卡車總覽", id: "o3", href: "" },
      { display: "資料登錄/更改", id: "o4", href: "" },
      { display: "胎紋量測", id: "o5", href: "" },
      { display: "登出", id: "logOut", href: "" },
    ],
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li> */}
              {this.state.options.map((option) => (
                <li className="nav-item" key={option.id}>
                  <Link className="nav-link" to={option.href}>
                    {option.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
