import React from "react";
import { useParams } from "react-router-dom";
import Videoplayer from "../../components/shared/videoplayer/Videoplayer";
import { Container, Row, Col } from "react-bootstrap";

function View() {
  const params = useParams<string>();
  return (
    <Container fluid style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <h2> View{params.id}</h2>
        </Col>
      </Row>
      <Row
        style={{
          margin: "auto",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Col style={{ alignItems: "center" }} sm>
          <Videoplayer
            classN="auto"
            loco="home"
            vidurl="https://www.youtube.com/watch?v=QyFcl_Fba-k"
          />
        </Col>
        <Col
          style={{
            textAlign: "left",
          }}
        >
          <h4>Video Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ab
            asperiores rerum, veniam alias ut accusantium{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default View;
