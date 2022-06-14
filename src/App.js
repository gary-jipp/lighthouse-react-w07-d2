import './App.css';

function App() {
  console.log("Rendering App Component");

  let counter = 0;

  const myFunction = function() {
    counter++;
    console.log("Button Clicked.  count = ", counter);
  };

  const hello =
    <>
      <h2>Hello React</h2>
    </>;

  return (
    <div className="App">

      {hello}

      <button onClick={myFunction}>Click Me</button>
      <div>counter = {counter}</div>

    </div>
  );
}

export default App;
