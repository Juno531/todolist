import react from "react";
import styled from "./BottomNavi.module.css";

import { ReactComponent as ListIcon } from "../assets/icons/list.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/setting.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { NavLink, Navigate, Link } from "react-router-dom";

const activeStyle = {
  stroke: "tomato",
};

const activeStyleCal = {
  fill: "tomato",
};
const noneActiveStyle = {
  stroke: "black",
};

function BottomNavi() {
  return (
    <div className={styled.container}>
      <div className={styled.menuConatiner}>
        <div className={styled.navIcon}>
          <NavLink
            to="/calendar"
            style={({ isActive }) => (isActive ? activeStyleCal : {})}
          >
            <CalendarIcon
              className={`${styled.navMenu} ${styled.calendarIcon}`}
            ></CalendarIcon>
          </NavLink>
        </div>
        <div className={styled.navIcon}>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : noneActiveStyle)}
          >
            <ListIcon
              className={`${styled.navMenu} ${styled.listIcon}`}
            ></ListIcon>
          </NavLink>
        </div>
        <div className={styled.navIcon}>
          <NavLink
            to="/setting"
            style={({ isActive }) => (isActive ? activeStyle : noneActiveStyle)}
          >
            <SettingIcon
              className={`${styled.navMenu} ${styled.settingIcon}`}
            ></SettingIcon>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BottomNavi;
