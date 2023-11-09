import React from "react";
import Card from "react-bootstrap/Card";

interface VidCardProps {
  ctitle?: string;
  ctxt?: string;
  imgurl?: string;
}

function VidCard({ ctitle, ctxt, imgurl }: VidCardProps) {
  return (
    <Card style={{ margin: "0.5rem" }}>
      <Card.Img style={{ minWidth: "150px" }} variant="top" src={imgurl} />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>{ctitle}</Card.Title>
        <Card.Text>{ctxt}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default VidCard;
