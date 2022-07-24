import React from "react";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Calendar from "./pages/Calendar";
import BottomNavi from "./component/BottomNavi";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <div>
        <BottomNavi />
      </div>
    </div>
  );
}

export default App;
