import React from "react";
import Videoplayer from "../../components/shared/videoplayer/Videoplayer";
import { Container, Stack, Row, Col } from "react-bootstrap";

function Landing() {
  return (
    <div>
      <h1>Landing</h1>
      <Container fluid>
        <Row>
          <Col>
            <Videoplayer
              classN="auto"
              loco="home"
              vidurl="https://www.youtube.com/watch?v=QyFcl_Fba-k"
            />
          </Col>
          <Col sm>
            <div className="LDesc">
              <h2>sermaon</h2>
              <p>lorem</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Featured</h2>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={"auto"}>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
