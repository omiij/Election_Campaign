import React from "react";
import ReactPlayer from "react-player";
import "./Meet.css";

function Meet() {
  return (
    <div className="meetMain-container">
      <div className="videoPlayer">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=1iRdi8K4tfg"
          controls={true}
          loop={true}
          className="player"
          autoPlay
        />
      </div>
      <div className="MeetContent">
        <h1>नमस्कार !!!</h1>
        <h3>मैं नरेन्द्र दामोदरदास मोदी</h3>
        <p>
          वडनगर के एक गुजराती परिवार में पैदा हुए, मोदी ने अपने बचपन में चाय
          बेचने में अपने पिता की मदद की, और बाद में अपना खुद का स्टाल चलाया। आठ
          वर्ष की आयु में वे आरएसएस से जुड़े, जिसके साथ एक लम्बे समय तक
          सम्बन्धित रहे। स्नातक होने के बाद उन्होंने अपने घर छोड़ दिया। मोदी ने
          दो साल तक भारत भर में यात्रा की, और कई धार्मिक केन्द्रों का दौरा किया।
          1969 या 1970 वे गुजरात लौटे और अहमदाबाद चले गए। 1971 में वह आरएसएस के
          लिए पूर्णकालिक कार्यकर्ता बन गए। 1975 में देश भर में आपातकाल की स्थिति
          के समय उन्हें कुछ समय के लिए छिपना पड़ा। 1985 में वे बीजेपी से जुड़े
          और 2001 तक पार्टी पदानुक्रम के भीतर कई पदों पर कार्य किया, जहाँ से वे
          धीरे धीरे भाजपा में सचिव के पद पर पहुँचे।
        </p>
      </div>
    </div>
  );
}
export default Meet;
