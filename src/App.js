import React, { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import './App.css';

const testData = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  { id: 4, text: "Item 4" },
];

function App() {
  console.log("Rendering App Component");

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  const onClick = function () {
    setCounter(counter + 1);
    setData(testData);
  };

  const onClear = function () {
    setCounter(0);
    setData([]);
  };


  return (
    <div className="App">
      <h2>Hello React</h2>

      <Input onClick={onClick} onClear={onClear}></Input>

      <div>counter = {counter}</div>

      <List data={data} />

    </div >
  );
}

export default App;
