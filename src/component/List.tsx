import React from "react";
import styled from "./List.module.css";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";

interface ListProps {
  mykey: string;
}

type Data = {
  mykey: number;
  textData: string;
};

let data: string;
let toDos: Data[] = [];

function List(props: ListProps) {
  const TODOS_KEY = props.mykey;

  if (localStorage.getItem(TODOS_KEY) !== null)
    data = localStorage.getItem(TODOS_KEY)!;
  else data = "";
  toDos = JSON.parse(localStorage.getItem(TODOS_KEY)!);

  const onDeleteClick = (event: any, key: number) => {
    const list = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.mykey !== key);
    list.remove();
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  };

  return (
    <div className={styled.listContainer}>
      {data !== ""
        ? JSON.parse(data).map((list: Data, index: number) => (
            <div className={styled.todoItem} key={list.mykey}>
              {list.textData}
              <button
                className={styled.listDeleteButton}
                onClick={() => {
                  onDeleteClick(event, list.mykey);
                }}
              >
                <DeleteIcon className={styled.deleteIcon}></DeleteIcon>
              </button>
            </div>
          ))
        : ""}
    </div>
  );
}

export default List;
