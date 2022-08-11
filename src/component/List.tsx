import React, { useState, useEffect } from "react";
import styled from "./List.module.css";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";
import { ReactComponent as AddIcon } from "../assets/icons/add.svg";

interface ListProps {
  mykey: string;
}

type Data = {
  mykey: number;
  textData: string;
};

let toDos: Data[] = []; // 임시 저장 배열

function List(props: ListProps) {
  const TODOS_KEY = props.mykey;
  const [text, setText] = useState("");
  const [list, setList] = useState<Data[]>([]);

  useEffect(() => {
    getData();
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const getData = () => {
    const data: string = localStorage.getItem(TODOS_KEY)!;
    setList(JSON.parse(data));
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

    console.log(toDos);
  };

  // 로컬스토리지 데이터 삭제
  const onDeleteClick = (event: any) => {
    const list = event.target.parentElement;
    console.log(list.id);
    toDos = toDos.filter((toDo) => `${toDo.mykey}` !== list.id);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  };

  return (
    <div>
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
      <div className={styled.listContainer}>
        {toDos !== []
          ? toDos.map((list: Data, index: number) => (
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

export default List;
