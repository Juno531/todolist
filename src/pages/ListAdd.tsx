import React, { useState } from "react";

type Data = {
  key: number;
  textData: string;
};

const TODOS_KEY = "todos";
const todos: Data[] = [];

// function saveTodos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
// }

function ListAdd() {
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
  };

  return (
    <div>
      <div>
        <input value={text} onChange={onChange}></input>
        <button onClick={onClick}>save</button>
      </div>
    </div>
  );
}

export default ListAdd;
