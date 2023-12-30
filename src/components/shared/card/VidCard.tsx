import React from "react";
import Card from "react-bootstrap/Card";

interface VidCardProps {
  ctitle?: string;
  ctxt?: string;
  imgurl?: string;
  pagelink?: string;
  videolink?: string;
}

function VidCard({ ctitle, ctxt, imgurl, pagelink, videolink }: VidCardProps) {
  return (
    <Card style={{ margin: "0.5rem", minWidth: "fit-content", padding: "8px" }}>
      <Card.Img
        style={{ minWidth: "200px", margin: "auto" }}
        variant="top"
        src={imgurl}
      />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>{ctitle}</Card.Title>
        <Card.Text>{ctxt}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default VidCard;
