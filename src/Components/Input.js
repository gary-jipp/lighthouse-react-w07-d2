import { useState } from "react";

const Input = function (props) {
  console.log("Rendering Input Component");

  const [input, setInput] = useState("");

  const onChange = function (event) {
    setInput(event.target.value);
  };

  const onClick = function () {

  };

  // function that returns JSX
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>Click Me</button>

    </div>
  );
};

export default Input;