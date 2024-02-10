import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Component1 from "./components/Component1";

function App() {
  return (
    <div className="App">
      <ParentComponent />

      <Component1>
        <button>hello</button>
      </Component1>
    </div>
  );
}

export default App;
