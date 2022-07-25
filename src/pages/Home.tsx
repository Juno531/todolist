import React from "react";
import styled from "./Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={styled.container}>
      <div>
        <Link to={"/Home/daylist"}>daylist</Link>
        <Link to={"/Home/weeklist"}>weeklist</Link>
        <Link to={"/Home/monthlist"}>monthlist</Link>
      </div>
      <div>content</div>
    </div>
  );
}

export default Home;
