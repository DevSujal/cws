import React, { useState } from "react";
import "./StudentRegistration.css";

const StudentRegistration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState({});
  const [mnumber, setMnumber] = useState({});
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This is the full information of Register Student!");
    console.log("First Name:" + fname);
    console.log("Last Name:" + lname);
    console.log("Email:" + email);
    console.log("your Mobile No = " + mnumber);
    console.log("Roll No = " + number);
    console.log("Password = " + password + "\n");
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div style={{ margin: "15px" }}>
          <label>First Name : </label>
          <input
            type="text"
            className="input"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div style={{ margin: "15px" }}>
          <label>Last Name : </label>
          <input
            type="text"
            className="input"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div style={{ margin: "15px" }}>
          <label>Enter Gmail : </label>
          <input
            type="gmail"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div style={{ margin: "15px" }}>
          <label>Enter Roll No : </label>
          <input
            type="number"
            className="input"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>
        <div style={{ margin: "15px" }}>
          <label>Enter mobileNo : </label>
          <input
            type="number"
            className="input"
            value={mnumber}
            onChange={(e) => setMnumber(e.target.value)}
          ></input>
        </div>
        <div style={{ margin: "15px" }}>
          <label>Enter Password : </label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div style={{ marginTop: "15px" }}>
          <input type="submit" className="submit"></input>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button
            type="rest"
            className="submit"
            style={{ backgroundColor: "red" }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistration;
