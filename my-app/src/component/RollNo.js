import React from 'react'

export default function RollNo() {
  let me = {
    width : "50%",
    border : "none",
    borderBottom : "1px solid black",
  }
  return (
    <div style={{margin : "15px"}}>
      <label>Enter Roll No : </label>
      <input type = 'number' style={me}></input>
    </div>
  )
}
