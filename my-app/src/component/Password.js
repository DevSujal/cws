import React from 'react'

export default function Password() {
  let me = {
    width : "50%",
    border : "none",
    borderBottom : "1px solid black",
  }
  return (
    <div style={{margin : "15px"}}>
      <label>Enter Password : </label>
      <input type='password' style={me}></input>
    </div>
  )
}
