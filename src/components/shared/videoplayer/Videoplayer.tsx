import React from "react";
import ReactPlayer from "react-player/youtube";

interface VideopProps {
  loco: string;
  vidurl: string;
  classN: string;
}

function Videoplayer({ loco, vidurl, classN }: VideopProps) {
  var vidwidth: number = 1;
  var vidheight: number = 1;
  if (loco === "home") {
    vidheight = 500;
    vidwidth = 500;
  } else {
    vidheight = 500;
    vidwidth = 500;
  }

  return (
    <div className={classN}>
      <ReactPlayer
        width={vidwidth}
        height={vidheight}
        controls={true}
        url="https://www.youtube.com/watch?v=QyFcl_Fba-k"
      />
    </div>
  );
}

export default Videoplayer;
