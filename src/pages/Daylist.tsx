import React, { useEffect, useState } from "react";
import styled from "./ListStyle.module.css";
import ListAdd from "./ListAdd";

function Daylist() {
  const [savedList, setList] = useState(0);

  return (
    <div className={styled.container}>
      <div>
        <p className={styled.date}>2022-08-04</p>
      </div>
      <div>
        <p>타입스크립트</p>
        <span>노마드코더 타입스크립트 강의듣기</span>
      </div>
      <div>
        <p>타입스크립트</p>
        <span>노마드코더 타입스크립트 강의듣기</span>
      </div>
      <div>
        <ListAdd />
      </div>
    </div>
  );
}

export default Daylist;
