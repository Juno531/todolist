import React, { useState, useEffect } from "react";
import styled from "./ListStyle.module.css";
import TodayDate from "../component/TodayDate";
import List from "../component/List";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";

type Data = {
  mykey: number;
  textData: string;
};

const TODOS_KEY = "daytodos"; // localStorage KEY
const todos: Data[] = []; // input 데이터를 저장하기 위한 임시 배열

function TodoItem({ mykey, textData }: Data) {
  return (
    <div key={mykey}>
      <h2>{textData}</h2>
    </div>
  );
}

function Daylist() {
  const [text, setText] = useState("");
  const [list, setList] = useState<Data[]>([]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onClick = () => {
    const newToDoObj: Data = {
      mykey: Date.now(),
      textData: text,
    };
    if (text.length >= 1) {
      todos.push(newToDoObj);
      setList(todos);
      console.log(typeof todos);
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
      setText("");
    }

    console.log(todos);
  };

  return (
    <div className={styled.container}>
      <div>
        <TodayDate></TodayDate>
      </div>
      <div className={styled.todoAdd}>
        <input
          className={styled.todoAddInput}
          value={text}
          onChange={onChange}
          placeholder="오늘의 할일"
          required={true}
          minLength={2}
          maxLength={50}
        ></input>
        <div className={styled.icon}>
          <AddIcon className={styled.icon} onClick={onClick}></AddIcon>
        </div>
      </div>
      <div className={styled.todoContainer}>
        <List mykey="daytodos"></List>
      </div>
    </div>
  );
}

export default Daylist;
