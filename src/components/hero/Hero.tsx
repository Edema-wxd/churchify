import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import biglogo from "../../assets/main-logo.png";
import style from "./Hero.module.scss";

function Hero() {
  return (
    <Container className={style.Hero}>
      <Row>
        <Col>
          <Image style={{ maxWidth: "80vw" }} src={biglogo} />
        </Col>
        <Col className={style.Htxt}>
          <h1>Churchify</h1>
          <h3>One-stop Video Service for Religious Purposes</h3>
          <p>We bring the congregation closer</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
