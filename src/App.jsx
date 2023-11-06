/* eslint-disable react/jsx-no-undef */
import Title from "./components/Title";
// import App_head from "./components/App_head";
import Add_item from "./components/Add_item";

function App() {
  return (
    <>
      <div className="App_container">
        <Title />
        <div className="App_body">
          <Add_item />
        </div>
      </div>
    </>
  );
}

export default App;
