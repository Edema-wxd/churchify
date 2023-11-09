import React from "react";
import "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="my-card">{children}</div>;
}

export default Card;
