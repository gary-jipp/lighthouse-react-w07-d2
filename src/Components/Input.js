import { useState } from "react";

const Input = function (props) {
  console.log("Rendering Input Component");

  const [input, setInput] = useState("");

  const onChange = function (event) {
    setInput(event.target.value);
  };

  // Notice we are adding some extra behavior to props.onClear
  const onClear = function () {
    props.onClear();
    setInput("");
  };

  // function that returns JSX
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={props.onClick}>Click Me</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Input;