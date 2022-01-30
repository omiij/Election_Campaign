import React from "react";
import Navbar from "./ComponentsNav/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Background from "./Background/Background";
import Isuues from "./Issues/Isuues";
import Meet from "./Meet/Meet";
import Footer from "./Footer/Footer";
import Intro from "./Intro/Intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Background />} />
      </Routes>
      <Routes>
        <Route path="/meet" element={<Intro />} />
      </Routes>
      <Routes>
        <Route path="/progress" element={<Isuues />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
