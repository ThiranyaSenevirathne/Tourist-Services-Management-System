import React from "react";
import "./Banner.css";


export default function Banner() {


  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/iplus/video/upload/v1660387289/test/Sri_Lanka_-_Heart_of_the_Indian_Ocean_online-video-cutter.com_xfpsaq.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <h1 className="BannerHeader">
          Sri Lanka        </h1>
      </div>
    </div>
  );
}
