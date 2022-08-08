import React from "react";

function TodayDate() {
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const todayDate = now.getDate();
  const todayYear = now.getFullYear();

  return (
    <div>
      <span>{`${todayYear} - ${todayMonth} - ${todayDate}`}</span>
    </div>
  );
}

export default TodayDate;
