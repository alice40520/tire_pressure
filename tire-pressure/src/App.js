// import Header from './components/Header'
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import TruckOverview from "./components/TruckOverview";
import Placeholder from "./components/placeholder";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

function App() {
  const navigation = [
    {
      label: "車種目錄",
      path: "/overview",
    },
    {
      label: "拖車總覽",
      path: "/truckOverview",
    },
    {
      label: "大型卡車總覽",
      path: "/placeholder",
    },
    {
      label: "小型卡車總覽",
      path: "/placeholder",
    },
    {
      label: "資料登錄/更改",
      path: "/placeholder",
    },
    {
      label: "胎紋量測",
      path: "/placeholder",
    },
    {
      label: "登出",
      path: "/placeholder",
    },
  ];
  return (
    <Router>
      <div className="App">
        <nav className="App-header navbar navbar-expand-lg navbar-light">
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="navbar-nav mr-auto">
            {navigation.map((item, i) => (
              <li className="nav-item" key={item.label}>
                <NavLink className="items" exact key={i} to={`${item.path}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </nav>

        <hr />

        <Routes>
          <Route exact path="/overview" element={<Overview />}></Route>
          <Route path="/truckOverview" element={<TruckOverview />}></Route>
          <Route path="/placeholder" element={<Placeholder />}></Route>
        </Routes>

        <footer className="App-footer footer fixed-bottom">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
