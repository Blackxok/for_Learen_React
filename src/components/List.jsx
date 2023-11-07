/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import listStyle from "../styles/list.module.css";

function List() {
  //
  // Up
  const [listOfItems, setListOfItems] = useState([
    { name: "BMW", price: "50m$" },
    { name: "Tesla", price: "80m$" },
    { name: "Porsche", price: "40m$" },
  ]);
  //
  // Down
  return (
    <>
      {listOfItems.map((item, index) => {
        return (
          <div className={listStyle.boxcha} key={index}>
            <h1 className={listStyle.nameSt}>{item.name}</h1>
            <h3>{item.price}</h3>
          </div>
        );
      })}
    </>
  );
}

export default List;
