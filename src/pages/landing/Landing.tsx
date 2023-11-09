import React from "react";
import Videoplayer from "../../components/shared/videoplayer/Videoplayer";
import { Container, Stack, Row, Col } from "react-bootstrap";
import VidCard from "../../components/shared/card/VidCard";
import randpicture from "../../assets/main-logo.png";

function Landing() {
  return (
    <div>
      <Container style={{ textAlign: "center" }} fluid="true">
        <Row>
          <h1>Landing</h1>
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
              <h2>sermaon</h2>
              <p>lorem</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={{ offset: 1 }}>
            <h2>Featured</h2>
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
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
          <Col>
            <VidCard ctitle="random" ctxt="random txt" imgurl={randpicture} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
