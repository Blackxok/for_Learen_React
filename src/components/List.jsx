/* eslint-disable no-unused-vars */
import React from "react";

function List() {
  const listOfItems = [
    { name: "BMW", price: "50m$" },
    { name: "Tesla", price: "80m$" },
    { name: "Porsche", price: "40m$" },
  ];

  return (
    <>
      {listOfItems.map((item) => {
        (<h1>{item.name}</h1>), (<h3>{item.price}</h3>);
      })}
    </>
  );
}

export default List;
