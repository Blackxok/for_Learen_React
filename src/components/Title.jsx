// eslint-disable-next-line no-unused-vars
import React from "react";
import title_style from "../styles/title.module.css";

function Title() {
  return (
    <>
      <div className={title_style.title_container}>
        <div className={title_style.title_App}>
          <h1>Assalomu alekum</h1>
          <p>React Aplicationimizga xush kelibsiz</p>
        </div>
      </div>
    </>
  );
}

export default Title;
