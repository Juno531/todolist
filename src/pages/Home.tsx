import React from "react";
import styled from "./Home.module.css";
import { AppBar, Switch, Tab, Tabs } from "@mui/material";

function Home() {
  const routes = ["/day", "/week", "/month"];

  return (
    <div className={styled.container}>
      <div></div>
      <div>content</div>
    </div>
  );
}

export default Home;
