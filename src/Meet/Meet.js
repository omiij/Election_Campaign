import React from "react";
import ReactPlayer from "react-player";
import "./Meet.css";

function Meet() {
  return (
    <div className="meetMain-container row">
      <div className="videoPlayer col-xm-6">
        <iframe
          className="player"
          width="560"
          autoPlay
          height="315"
          src="https://www.youtube.com/embed/FpEoW7RX2wU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="introContent col-xm-6">
        <div className="MeetContent">
          <h1>।। परिचय ।।</h1>

          <p>
          महंत श्री सिद्धबली धाम, कोटद्वार।। (2012-2022)
          <br></br>
          विधायक लैंसडाउन, उत्तराखंड।।
          
          <br></br>
          <br></br>
1996 में महामंडलेश्वर श्री श्री विश्वगुरु महायोगी जी से दीक्षा ली। 
1999 में श्री महंत की गद्दी पर विराजमान हो कर ,श्री सिद्धबली धाम के पीठाधीश्वर बने।
</p>
        </div>
      </div>
    </div>
  );
}
export default Meet;

// url="https://www.youtube.com/watch?v=1iRdi8K4tfg"
