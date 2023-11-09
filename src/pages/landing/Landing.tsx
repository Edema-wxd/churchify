import React from "react";
import Videoplayer from "../../components/shared/videoplayer/Videoplayer";
import { Stack } from "react-bootstrap";

function Landing() {
  return (
    <div>
      <h1>Landing</h1>
      <Stack direction="horizontal"  gap={2}>
        <Videoplayer
          classN="auto"
          loco="home"
          vidurl="https://www.youtube.com/watch?v=QyFcl_Fba-k"
        />
        <div className="LDesc">
          <h2>sermaon</h2>
          <p>lorem</p>
        </div>
      </Stack>
    </div>
  );
}

export default Landing;
