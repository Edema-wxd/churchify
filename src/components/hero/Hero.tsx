import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import biglogo from "../../assets/main-logo.png";
import style from "./Hero.module.scss";

function Hero() {
  return (
    <Container className={style.Hero}>
      <Row>
        <Col>
          <Image src={biglogo} />
        </Col>
        <Col className={style.Htxt}>
          <h1>Churchify</h1>
          <h3>We bring the congregation cloer</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
