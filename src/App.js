import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';

const testData = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  { id: 4, text: "Item 4" },
];

function App() {
  console.log("Rendering App Component");

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const onClick = function () {
    setCounter(counter + 1);
    setData(testData);
  };

  const onClear = function () {
    setCounter(0);
    setData([]);
  };

  const onChange = function (event) {
    setInput(event.target.value);
  };

  const list = data.map((item, i) => {
    return <li key={item.id}>{item.text}</li>;
    // Note.  Show what happens if try to render object
  });

  return (
    <div className="App">
      <h2>Hello React</h2>

      <Input></Input>

      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>Click Me</button>
      
      <button onClick={onClear}>Clear</button>
      <div>counter = {counter}</div>

      <ul>
        {list}
      </ul>

    </div >
  );
}

export default App;
