import React from "react";
import styled from "./ListStyle.module.css";
import TodayDate from "../component/TodayDate";
import List from "../component/List";

const TODOS_KEY = "daytodos"; // localStorage KEY

function Daylist() {
  return (
    <div className={styled.container}>
      <div>
        <TodayDate todayKey={TODOS_KEY}></TodayDate>
      </div>
      <div className={styled.todoContainer}>
        <List mykey={TODOS_KEY}></List>
      </div>
    </div>
  );
}

export default Daylist;
