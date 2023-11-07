import Title from "./components/Title";
import Add_item from "./components/Add_item";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="App_container">
        <Title />
        <div className="App_body">
          <Add_item />
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
