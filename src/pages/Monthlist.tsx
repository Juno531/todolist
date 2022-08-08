import React, { useState } from "react";
import styled from "./ListStyle.module.css";
import TodayDate from "../component/TodayDate";

type Data = {
  key: number;
  textData: string;
};

const TODOS_KEY = "daytodos";
const todos: Data[] = [];

function Monthlist() {
  const [text, setText] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onClick = () => {
    const newToDoObj: Data = {
      key: Date.now(),
      textData: text,
    };
    todos.push(newToDoObj);
    console.log(todos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    setText("");
  };

  return (
    <div className={styled.container}>
      <div>
        <TodayDate></TodayDate>
      </div>
      <div className={styled.todoContainer}>
        <span></span>
      </div>
      <div>
        <input value={text} onChange={onChange}></input>
        <button onClick={onClick}>save</button>
      </div>
    </div>
  );
}

export default Monthlist;
