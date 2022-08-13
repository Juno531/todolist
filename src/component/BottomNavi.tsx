import react from "react";
import styled from "./BottomNavi.module.css";

import { ReactComponent as ListIcon } from "../assets/icons/list.svg";
import { ReactComponent as SettingIcon } from "../assets/icons/setting.svg";
import { ReactComponent as AddIcon } from "../assets/icons/addcross.svg";
import { NavLink } from "react-router-dom";

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
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : noneActiveStyle)}
          >
            <ListIcon
              className={`${styled.navMenu} ${styled.listIcon}`}
            ></ListIcon>
          </NavLink>
        </div>
        {/* <div className={styled.navAdd}>
          <AddIcon className={styled.navAddIcon}></AddIcon>
        </div> */}
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
