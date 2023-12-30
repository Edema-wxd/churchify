import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import randimg from "../../assets/logo.svg";

function Services() {
  return (
    <>
      <h2>Our Values</h2>
      <Container>
        <Row sm={3} style={{ justifyContent: "space-evenly" }}>
          <Col style={{ margin: "1rem" }}>
            <Card style={{ minWidth: "300px", margin: "1rem" }}>
              <Card.Img variant="top" src={randimg} />
              <Card.Body>
                <Card.Title>Value one</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis dolorum est dignissimos fugiat ex. Nesciunt minus
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ margin: "1rem" }}>
            <Card style={{ minWidth: "300px", margin: "1rem" }}>
              <Card.Img variant="top" src={randimg} />
              <Card.Body>
                <Card.Title>Value one</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis dolorum est dignissimos fugiat ex. Nesciunt minus
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ margin: "1rem" }}>
            <Card style={{ minWidth: "300px", margin: "1rem" }}>
              <Card.Img variant="top" src={randimg} />
              <Card.Body>
                <Card.Title>Value one</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis dolorum est dignissimos fugiat ex. Nesciunt minus
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
