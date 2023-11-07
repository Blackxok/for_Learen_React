/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function List() {

  // Up
  const [listOfItems, setListOfItems] = useState([
    { name: "BMW", price: "50m$" },
    { name: "Tesla", price: "80m$" },
    { name: "Porsche", price: "40m$" },
  ]);

  // Down
  return (
    <>
      {listOfItems.map((item) => {
        return (
          <>
            <h1 className={}{item.name}</h1>
            <h3>{item.price}</h3>
          </>
        );
      })}
    </>
  );
}

export default List;
