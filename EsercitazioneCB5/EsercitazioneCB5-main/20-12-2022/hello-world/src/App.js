import logo from "./logo.svg";
import "./App.css";
import { Button, Button1 } from "./components/Button";

function App() {
  const world = "Hello World";
  return (
    <div className="App">
      <header className="App-header">
        {Button()}
        <h2>{world}</h2>
      </header>{" "}
    </div>
  );
}
export default App;
