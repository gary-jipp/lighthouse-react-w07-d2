import {useState} from 'react';
import './App.css';

const data = [
  {id: 1, quote: "Item 1"},
  {id: 2, quote: "Item 2"},
  {id: 3, quote: "Item 3"},
  {id: 4, quote: "Item 4"},
];

function App() {
  console.log("Rendering App Component");

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const onClick = function() {
    setCounter(counter + 1);
  };

  const onChange = function(event) {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const list = data.map((item) => {
    return <li key={item.id}>{item.quote}</li>;
  });

  return (
    <div className="App">
      <h2>Hello React</h2>

      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>Click Me</button>
      <div>counter = {counter}</div>

      <ul>
        {list}
      </ul>

    </div >
  );
}

export default App;
