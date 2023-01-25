// 1) Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2)Get a reference to the container element ID root
 const el = document.getElementById("root");
// 3) Tell React to take control of the root element
 const root = ReactDOM.createRoot(el);

// 4) Create a component
const Starter = () => {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  const name = "Chioma";
  return (
    <div>
      <h1>{message}</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <div>
        My name is:<h1>{name}</h1>
      </div>
      <input
        style={{ backgroundColor: "gray" }}
        type={"text"}
        spellCheck
        placeholder="spell checker"
        autoFocus
      />

      <input type={"number"} min={15} maxLength={5} />
    </div>
  );
};

// 5) Render the component || Show the component on the screen
root.render(<Starter/>);
