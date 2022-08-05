import React, { useState } from "react";
import AddIcon from "../assets/icons/plus.svg";

function ListAdd() {
  const [text, setText] = useState("");
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const todayDate = now.getDate();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onClick = () => {
    localStorage.setItem(`${todayMonth}${todayDate}${localStorage.length}`
    , JSON.stringify(text));
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
