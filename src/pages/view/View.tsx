import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

function View() {
  const params = useParams<string>();
  return (
    <div>
      View{params.id}
      <br />
      <div>
        <ReactPlayer
          width={320}
          height={240}
          controls={false}
          url="https://www.youtube.com/watch?v=QyFcl_Fba-k"
        />
      </div>
    </div>
  );
}

export default View;
