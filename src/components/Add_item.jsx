// eslint-disable-next-line no-unused-vars
import React from "react";
import add_item_style from "../styles/add_item_style.module.css";

function Add_item() {
  return (
    <>
      <div className={add_item_style.additem_container}>
        {/* <button className={add_item_style.additem_button}>++Add item++</button> */}
        <div className="con">
          <a className="but">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Button
          </a>
        </div>
      </div>
    </>
  );
}

export default Add_item;
