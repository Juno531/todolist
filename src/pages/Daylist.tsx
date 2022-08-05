import React, { useEffect, useState } from "react";
import styled from "./ListStyle.module.css";
import ListAdd from "./ListAdd";

function Daylist() {
  const [savedList, setList] = useState(0);
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const todayDate = now.getDate();

  React.useEffect(() => {
    const data = localStorage.getItem(`${todayMonth}${todayDate}${localStorage.length-1}`)
    console.log(data)
    if(data != null){
      const listObj = {
        id:`${todayMonth}${todayDate}${localStorage.length-1}`,
        test:JSON.parse(data)
      }
      setList(listObj)
    }
  })
  return (
    <div className={styled.container}>
      <div>
        <p className={styled.date}>2022-08-04</p>
      </div>
      <div className={styled.todoCo}>
        <span>{savedList ? savedList: ""}</span>
      </div>
      <div>
        <span>노마드코더 타입스크립트 강의듣기</span>
      </div>
      <div>
        <ListAdd />
      </div>
    </div>
  );
}

export default Daylist;
