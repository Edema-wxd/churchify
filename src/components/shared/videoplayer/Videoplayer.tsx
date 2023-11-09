import React from "react";
import ReactPlayer from "react-player/youtube";

interface VideopProps {
  loco: string;
  vidurl: string;
  classN: string;
}

function Videoplayer({ loco, vidurl, classN }: VideopProps) {
  var vidwidth: number | string = 1;
  var vidheight: number | string = 1;
  if (loco === "home") {
    vidheight = "100%";
    vidwidth = "100%";
  } else {
    vidheight = 500;
    vidwidth = 375;
  }

  return (
    <div className={`${classN} player-wrapper`}>
      <ReactPlayer
        className="react-player"
        width={vidwidth}
        height={vidheight}
        controls={true}
        url="https://www.youtube.com/watch?v=QyFcl_Fba-k"
      />
    </div>
  );
}

export default Videoplayer;
