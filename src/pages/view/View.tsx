import React from "react";
import { useParams } from "react-router-dom";

function View() {
  const params = useParams<string>();
  return <div>View{params.id}</div>;
}

export default View;
