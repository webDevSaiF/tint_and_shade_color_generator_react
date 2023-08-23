import "./styles.css";
import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, isError] = useState(false);
  const [list, setList] = useState(new Values("royalblue").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colorValues = new Values(color).all(10);
      setList(colorValues);
      setColor("");
    } catch (error) {
      isError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Tint & Shade Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            placeholder="color name or hex code"
            required
            className={error ? "error" : ""}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} index={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
