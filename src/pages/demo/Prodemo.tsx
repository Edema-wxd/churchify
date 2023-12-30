import React from "react";
import Videoplayer from "../../components/shared/videoplayer/Videoplayer";
import { Container, Row, Col } from "react-bootstrap";
import VidCard from "../../components/shared/card/VidCard";
import randpicture from "../../assets/main-logo.png";
import demo from "../../data/Demo";

function Prodemo() {
  return (
    <div>
      <Container style={{ textAlign: "center", padding: "16px" }} fluid="true">
        <Row>
          <h1>Demo page</h1>
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Row
          style={{
            margin: "auto",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Col>
            <Videoplayer
              classN="auto"
              loco="home"
              vidurl="https://www.youtube.com/watch?v=QyFcl_Fba-k"
            />
          </Col>
          <Col style={{ textAlign: "left" }} sm>
            <div className="LDesc">
              <h2>Sermon title</h2>
              <p>Brief description</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
          </Col>
        </Row>

        <Row>
          <Col sm={{ offset: 0 }}>
            <h2>Featured Sermons</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>

        <Row
          style={{
            margin: "auto",
            width: "fit-content",
            alignContent: "center",
            justifyContent: "center",
          }}
          md={4}
          lg={"auto"}
          className="gap-3"
        >
          {demo.map((item, index) => (
            <Col key={index}>
              <VidCard
                ctitle={item.title}
                ctxt={demo[index].descript}
                imgurl={randpicture}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Prodemo;
