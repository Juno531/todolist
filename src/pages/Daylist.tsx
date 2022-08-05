import React from "react";
import styled from "./ListStyle.module.css";
import ListAdd from "./ListAdd";


function Daylist() {
  return (
    <div className={styled.container}>
      <h3 className={styled.date}>2022-08-04</h3>
      <div>
        <h2>타입스크립트</h2>
        <span>노마드코더 타입스크립트 강의듣기</span>
      </div>
      <div>
        <h2>타입스크립트</h2>
        <span>노마드코더 타입스크립트 강의듣기</span>
      </div>
      <div>
        <ListAdd />
      </div>
    </div>
  );
}

export default Daylist;
