import React from "react";
import ReactPlayer from "react-player";
import "./Meet.css";

function Meet() {
  return (
    <div className="meetMain-container">
      <div className="videoPlayer">
        <iframe
          className="player"
          width="560"
          autoPlay
          height="315"
          src="https://www.youtube.com/embed/IPmO2bO5ttU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="introContent">
        <div className="MeetContent">
          <h1>।। परिचय ।।</h1>

          <p>
            पिता- स्व भारत सिंह रावत ( अविभाजित उत्तरप्रदेश में लैंसडाउन से 5
            बार के विधायक एवम उत्तराखंड में प्रथम योजना आयोग के उपाध्यक्ष)
            माता-स्व दर्शनी देवी ( 2 बार जिला पंचायत सदस्य एवम बद्री केदार समिति
            में उपाध्यक्ष) शैक्षणीक योग्यता-पीतांबर दत्त बड़थ्वाल डिग्री कॉलेज
            से स्नातक।
          </p>
        </div>
      </div>
    </div>
  );
}
export default Meet;

// url="https://www.youtube.com/watch?v=1iRdi8K4tfg"
