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

  const onClick = (e: React.ButtonHTMLAttributes) => {
    localStorage.setItem("");
  };
  return (
    <div>
      <div>
        <input value={text} onChange={onChange}></input>
      </div>
    </div>
  );
}

export default ListAdd;
