import React, { useState } from "react";

const Fname = () => {
  const [name, setName] = useState("");
  function handleEvent(me) {
    me.preventDefault();
    console.log("name = " + name);
  }
  return (
    <div>
      <form action="" onSubmit={handleEvent}>
        <label htmlFor="">
          name :
          <input
            type="text"
            value={name}
            onChange={(me) => setName(me.target.value)}
          />
        </label>
        <br />
        <button type="submit">Press Boobs</button>
      </form>
    </div>
  );
};

export default Fname;
