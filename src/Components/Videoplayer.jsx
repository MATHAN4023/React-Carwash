import React from "react";
import videosrc from "../assets/videoplayback.webm";
import '../css/Videoplayer.css'

const Videoplayer = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted src={videosrc} className="responsive-video"></video>
    </div>
  );
};

export default Videoplayer;
