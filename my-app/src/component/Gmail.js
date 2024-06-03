import React from 'react'

export default function Gmail() {
  let me = {
    width : "60%",
    border : "none",
    borderBottom : "1px solid black",
  }
  return (
      <div style={{margin : "15px"}}>
        <label>Enter Gmail : </label>
        <input type='gmail'style={me}></input>
      </div>
  )
}
