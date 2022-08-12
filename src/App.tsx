import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Calendar from "./pages/Calendar";
import BottomNavi from "./component/BottomNavi";
import Daylist from "./pages/Daylist";
import Weeklist from "./pages/Weeklist";
import Monthlist from "./pages/Monthlist";
import ListAdd from "./pages/ListAdd";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="day" element={<Daylist />} />
          <Route path="week" element={<Weeklist />} />
          <Route path="month" element={<Monthlist />} />
          <Route path="addlist" element={<ListAdd />} />
        </Route>
        <Route path="/setting" element={<Setting />} />
        
      </Routes>

      <div>
        <BottomNavi />
      </div>
    </div>
  );
}

export default App;
