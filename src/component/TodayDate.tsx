import React from "react";

interface DateProps {
  todayKey: string;
}

const DAY_KEY = "daytodos";
const WEEK_KEY = "weektodos";
const MONTH_KEY = "monthtodos";

function TodayDate(props: DateProps) {
  const now = new Date();
  const todayMonth: number = now.getMonth() + 1;
  const todayDate: number = now.getDate();
  const todayYear: number = now.getFullYear();

  if (props.todayKey === DAY_KEY) {
    return (
      <div>
        <span>{`${todayYear} - ${todayMonth} - ${todayDate}`}</span>
      </div>
    );
  } else if (props.todayKey === WEEK_KEY) {
    let week: number;

    if (todayDate <= 7) {
      week = 1;
    } else if (todayDate >= 8 && todayDate < 15) {
      week = 2;
    } else if (todayDate >= 15 && todayDate < 22) week = 3;
    else if (todayDate >= 22 && todayDate < 29) week = 4;
    else week = 5;

    return (
      <div>
        <span>{`${todayYear} - ${todayMonth} - ${week}주차`}</span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{`${todayYear} - ${todayMonth}`}</span>
      </div>
    );
  }
}

export default TodayDate;
