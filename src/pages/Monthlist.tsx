import styled from "./ListStyle.module.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";
import TodayDate from "../component/TodayDate";

const TODOS_KEY = "monthtodos"; // localStorage KEY

type Data = {
  mykey: number;
  textData: string;
};

let toDos: Data[] = []; // 임시 저장 배열

function Monthlist() {
  const [text, setText] = useState("");
  const [list, setList] = useState<Data[]>(
    localStorage.getItem(TODOS_KEY) === null
      ? []
      : JSON.parse(localStorage.getItem(TODOS_KEY)!)
  );

  useEffect(() => {
    getData;
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const getData = () => {
    const data: string = localStorage.getItem(TODOS_KEY)!;
    setList(JSON.parse(data));
    console.log(`list ${list}`);
  };

  /* 
  로컬스토리지에 Todo 저장
  */
  const onClick = () => {
    const newToDoObj: Data = {
      mykey: Date.now(),
      textData: text,
    };

    if (text.length >= 1) {
      toDos.push(newToDoObj);
      setList(toDos);
      console.log(typeof toDos);
      localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
      setText("");
    }
  };

  // 로컬스토리지 데이터 삭제
  const onDeleteClick = (event: any) => {
    const list = event.target.parentElement;
    console.log(list.id);
    toDos = toDos.filter((toDo) => `${toDo.mykey}` !== list.id);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    setList(toDos);
  };
  return (
    <div className={styled.container}>
      <div>
        <TodayDate todayKey={TODOS_KEY}></TodayDate>
      </div>
      <div className={styled.todoAdd}>
        <input
          className={styled.todoAddInput}
          value={text}
          onChange={onChange}
          placeholder="Write Todo.."
          required={true}
          minLength={2}
          maxLength={50}
        ></input>
        <div className={styled.icon}>
          <AddIcon className={styled.icon} onClick={onClick}></AddIcon>
        </div>
      </div>
      <div className={styled.listContainer}>
        {list !== []
          ? list.map((list: Data, index: number) => (
              <div id={`${list.mykey}`} className={styled.todoItem} key={index}>
                {list.textData}
                <button
                  className={styled.listDeleteButton}
                  onClick={onDeleteClick}
                >
                  <DeleteIcon className={styled.deleteIcon}></DeleteIcon>
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Monthlist;
