import React from "react";
import "../Intro/Intro.css";

function Intro() {
  return (
    <>
      <div className="meetMain-container">
        <div className="videoPlayer">
          <iframe
            className="player"
            autoPlay
            src="https://www.youtube.com/embed/FpEoW7RX2wU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            controls
          ></iframe>
        </div>
        <div className="introContent col-xm-6">
          <div className="MeetContent">
            <h2>।। परिचय ।।</h2>
            <p>
              महंत श्री सिद्धबली धाम, कोटद्वार।। (2012-2022)
              <br></br>
              विधायक लैंसडाउन, उत्तराखंड।।
              <br></br>
              <br></br>
              1996 में महामंडलेश्वर श्री श्री विश्वगुरु महायोगी जी से दीक्षा ली।
              1999 में श्री महंत की गद्दी पर विराजमान हो कर ,श्री सिद्धबली धाम
              के पीठाधीश्वर बने।
            </p>
            <br></br>
            <br></br>
            <h2>।। आध्यात्मिक जीवन ।।</h2>
            <p>
              1996 में महामंडलेश्वर श्री श्री विश्वगुरु महायोगी जी से दीक्षा ली
              । 1999 में श्री महंत की गद्दी पर विराजमान हो कर ,श्री सिद्धबली धाम
              के पीठाधीश्वर बने।
            </p>
            <br></br>
            <br></br>
            <h2>।। छात्र राजनीति ।।</h2>
            <p>
              1988-89 छात्र महासंघ अध्यक्ष, हेमवती नंदन बहुगुणा गढ़वाल
              विश्वविद्यालय
            </p>
          </div>
        </div>
      </div>
      <div className="political_Career">
        <h1> ।। राजनीतिक जीवन ।।</h1>
        <ul>
          <li>1994-96 DCDF कोटद्वार में निदेशक।</li>
          <li>1997-99 जिला सहकारी बैंक कोटद्वार में निदेशक।</li>
          <li>1998-2000 गढ़वाल मंडल अध्यक्ष, भारतीय किसान संघ।</li>
          <li>2000-01 जिला उपाध्यक्ष, भाजपा युवा मोर्चा पौड़ी गढ़वाल।</li>
          <li>2002-03 प्रदेश महामंत्री, भाजपा युवा मोर्चा।</li>
          <li>2003-05 प्रदेश कार्यकारणी सदस्य, भाजपा ।</li>
          <li>2008-12 ब्लॉक प्रमुख ,जयहरीखाल, पौड़ी गढ़वाल।</li>
          <li>2012-17 विधायक, लैंसडाउन।</li>
          <li>
            2012-13 सदस्य, सरकारी आश्वासन संबंधी समिति, विधानसभा उत्तराखंड।
          </li>
          <li>
            2017- वर्तमान सदस्य, संस्कृति एवं आवास विकास समिति, विधानसभा
            उत्तराखंड।
          </li>
          <li>विधायक, लैंसडाउन 2017-22</li>
        </ul>
      </div>
    </>
  );
}

export default Intro;
