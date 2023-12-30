import React from "react";
import { Form, Button, Stack, Container, Row, Col } from "react-bootstrap";
import randimg from "../../assets/logo.svg";

function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <Container fluid>
        <Row sm={1}>
          <Col>radom teaxt</Col>
          <Col>
            <Form style={{ textAlign: "left", margin: "1rem" }}>
              <Stack direction="vertical" gap={3}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Stack>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
