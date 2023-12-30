import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import placeimg from "../../assets/logo.svg";

function Prodcaro() {
  return (
    <>
      <h2 style={{ marginTop: "2rem" }}>Products</h2>
      <br />
      <Container style={{ padding: "1rem 2rem" }}>
        <Row sm={2}>
          <Col>
            <Image src={placeimg} />
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h4>Video Streaming</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Col>
        </Row>

        <Row sm={2}>
          <Col>
            <Image src={placeimg} />
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h4>Video Archival</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Col>
        </Row>

        <Row sm={2}>
          <Col>
            <Image src={placeimg} />
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h4>Live Streaming</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Prodcaro;
