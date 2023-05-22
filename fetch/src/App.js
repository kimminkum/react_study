import "./App.css";
import TestMocking from "./components/TestMocking";
import Counter from "./features/counter/Counter";
import CounterTwo from "./components/CounterTwo";

function App() {
  return (
    <div className="App">
      <TestMocking />
      <Counter />
      <br />
      <br />
      <br />
      {/* <CounterTwo /> */}
    </div>
  );
}

export default App;
