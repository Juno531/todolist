import React, { useState, useEffect } from "react";
import styled from "./ListStyle.module.css";
import TodayDate from "../component/TodayDate";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";

type Data = {
  key: number;
  textData: string;
};

const TODOS_KEY = "daytodos";
const todos: Data[] = [];

function TodoItem({ key, textData }: Data) {
  return (
    <div key={key}>
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
      key: Date.now(),
      textData: text,
    };
    if (text.length >= 1) {
      todos.push(newToDoObj);
      console.log(todos);
      setList(todos);
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
      setText("");
    } else {
      new Error("2글자 이상 적어주세요");
    }
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
        {list.map((li, index) => (
          <TodoItem key={index} textData={li.textData} />
        ))}
      </div>
    </div>
  );
}

export default Daylist;
