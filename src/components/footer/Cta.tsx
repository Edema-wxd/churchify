import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import style from "./Footer.module.scss";
import logo from "../../assets/logo.svg";
function Cta() {
  return (
    <Container className={`Cta ${style.Footer}`} fluid="true">
      <Row>
        <Col>
          <Image src={logo} />
        </Col>
        <Col>
          <p className={style.left}>We bring the Congregation Closer</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Cta;
