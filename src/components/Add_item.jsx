// eslint-disable-next-line no-unused-vars
import React from "react";
import add_item_style from "../styles/add_item_style.module.css";

function Add_item() {
  return (
    <>
      <div className={add_item_style.additem_container}>
        <button className={add_item_style.btnAdd}>Add Button</button>
      </div>
    </>
  );
}

export default Add_item;
