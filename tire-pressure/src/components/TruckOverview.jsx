import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  // ListGroup,
  Container,
  CardGroup,
} from "react-bootstrap";
import "./TruckOverview.css";

class TruckOverview extends Component {
  state = {
    truckInfos: [
      // 行駛中:inMotion, 出車準備:inPrep, 靜止:stationary
      {
        carType: "拖車",
        headNo: "E01",
        tankNo: "633",
        status: "行駛中",
        warning: true,
      },
      {
        carType: "拖車",
        headNo: "E04",
        tankNo: "639",
        status: "靜止",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E25",
        tankNo: "615",
        status: "出車準備",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E20",
        tankNo: "631",
        status: "行駛中",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E01",
        tankNo: "633",
        status: "行駛中",

        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E04",
        tankNo: "639",
        status: "靜止",
        warning: true,
      },
      {
        carType: "拖車",
        headNo: "E25",
        tankNo: "615",
        status: "出車準備",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E20",
        tankNo: "631",
        status: "行駛中",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E01",
        tankNo: "633",
        status: "行駛中",

        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E04",
        tankNo: "639",
        status: "靜止",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E25",
        tankNo: "615",
        status: "出車準備",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E20",
        tankNo: "631",
        status: "行駛中",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E01",
        tankNo: "633",
        status: "行駛中",

        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E04",
        tankNo: "639",
        status: "靜止",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E25",
        tankNo: "615",
        status: "出車準備",
        warning: false,
      },
      {
        carType: "拖車",
        headNo: "E20",
        tankNo: "631",
        status: "行駛中",
        warning: false,
      },
    ],
  };

  colorByState(status, warning) {
    if (warning) {
      return "bg-presWarning text-white";
    }
    if (status === "行駛中") {
      return "bg-inMotion";
    } else if (status === "靜止") {
      return "bg-stationary";
    }
    return "bg-inPrep";
  }

  render() {
    return (
      <Container
        // className="align-items-start justify-content-start"
        style={{ backgroundColor: "#e7e7e7", maxWidth: "95%" }}
      >
        <Row>
          <Col className="col-2 m-y-5">
            <button
              className="rounded"
              style={{
                backgroundColor: "#ed1424",
                width: "50%",
                fontSize: "30pt",
                margin: "0pt",
              }}
            >
              拖車
            </button>
          </Col>
          <Col className="col-10 m-y-5">
            {/* 基本上一個 Row 放置 12 個 Column，若有一個 Row 超過 12 個 Column，則會斷行放置多出來的 Column */}
            {/* <Container> */}
            <div>
              <CardGroup>
                {/* <Row> */}
                {this.state.truckInfos.map((truckInfo, idx) => (
                  // <Col className="col-1">
                  <Card
                    className="border-0"
                    style={{
                      // width: "7.55%",
                      margin: "0pt 5pt",
                      padding: "0",
                      minWidth: "8.3%",
                      maxWidth: "8.3%",
                      textAlign: "center",
                    }}
                  >
                    {/* <ListGroup variant="flush" key={idx} style={{ width: "100pt" }}>
                        <ListGroup.Item className="border-bottom text-capitalize"
                          style={{ fontWeight: "bold", fontSize: 30, backgroundColor: "red", }}>
                          {truckInfo.headNo
                        </ListGroup.Item>
                        <ListGroup.Item
                          className="border-top text-capitalize fs-2 fw-bold"
                          style={{ fontWeight: "bold", fontSize: 30, backgroundColor: "red",}}
                        >
                          {truckInfo.tankNo}
                        </ListGroup.Item>
                      </ListGroup> */}
                    <Card.Body
                      className={
                        "rounded " +
                        this.colorByState(truckInfo.status, truckInfo.warning)
                      }
                      style={{ padding: "0 3px" }}
                    >
                      <Card.Text
                        className="border-white border-bottom border-5"
                        style={{
                          fontSize: "30pt",
                          fontWeight: "bold",
                          padding: "1pt",
                          marginBottom: "0",
                        }}
                      >
                        {truckInfo.headNo}
                      </Card.Text>
                      <Card.Text
                        style={{
                          fontSize: "30pt",
                          fontWeight: "bold",
                          padding: "1pt",
                          marginTop: "0",
                        }}
                      >
                        {truckInfo.tankNo}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className="border-0"
                      style={{
                        backgroundColor: "#e7e7e7",
                        padding: "0",
                        color: "black",
                      }}
                    >
                      <p>{truckInfo.status}</p>
                    </Card.Footer>
                  </Card>
                  // </Col>
                ))}
                {/* </Row> */}
                {/* </Container> */}
              </CardGroup>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-row-reverse">
          <a href="./" className="border d-inline-flex p-2">
            Return to Previous Page Placeholder
          </a>
        </Row>
      </Container>
    );
  }
}

export default TruckOverview;
