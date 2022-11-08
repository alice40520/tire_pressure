import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";
import "./Overview.css";

class Overview extends Component {
  state = {
    carInfos: [
      {
        carType: "拖車",
        driving: 1,
        prep: 2,
        stationary: 3,
        warning: 1,
      },
      {
        carType: "大型卡車",
        driving: 1,
        prep: 2,
        stationary: 3,
        warning: 0,
      },
      {
        carType: "小型貨車",
        driving: 1,
        prep: 2,
        stationary: 3,
        warning: 0,
      },
    ],
  };

  //   warningDisplay(){
  //     if carInfo.warning == 0 return <span>車輛正常</span>
  //     else return <span>警示！{carInfo.warning} 輛</span>
  //   }
  render() {
    return (
      <div>
        <Container>
          {this.state.carInfos.map((carInfo, index) => (
            <Row className="wrapper">
              <Col
                className="category col-md-3"
                style={{
                  backgroundColor:
                    carInfo.warning === 0 ? "#b3b3b3" : "#ef1c23",
                }}
              >
                <div className="card-body">
                  <button type="button" className="btn btn-outline-primary">
                    {carInfo.carType}
                  </button>
                </div>
              </Col>
              <Col
                className="car-data col-md-6"
                style={{
                  backgroundColor:
                    carInfo.warning === 0 ? "#b3b3b3" : "#ef1c23",
                  borderRadius: carInfo.warning === 0 ? "0 25px 25px 0" : "0",
                }}
              >
                <div className="card-body">
                  <Table responsive borderless className="text-left">
                    <thead style={{ display: "none" }}>
                      <tr>
                        <th>狀態</th>
                        <th>數量</th>
                        <th>單位</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>行駛中：</td>
                        <td>{carInfo.driving}</td>
                        <td>輛</td>
                      </tr>
                      <tr>
                        <td>出車準備：</td>
                        <td>{carInfo.prep}</td>
                        <td>輛</td>
                      </tr>
                      <tr>
                        <td>靜止中： </td>
                        <td>{carInfo.stationary}</td>
                        <td>輛</td>
                      </tr>
                      <tr
                        className={carInfo.warning === 0 ? null : "text-white"}
                      >
                        <td>{carInfo.warning === 0 ? "車輛正常" : "警示！"}</td>
                        <td>
                          {carInfo.warning === 0 ? null : carInfo.warning}
                        </td>
                        <td>{carInfo.warning === 0 ? null : "輛"}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              {carInfo.warning === 0 ? null : (
                <Col className="warningSect col-md-3">
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={require("../image/overview_warning.png")}
                        alt="warning"
                      />
                      {/* react-bootstrap image is available import Image from
                      "react-bootstrap/Image"; */}
                    </p>
                  </div>
                </Col>
              )}
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

export default Overview;
