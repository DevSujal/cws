import React from 'react'

export default function Submit(props) {
  let me = {
    width : "100%",
    border : "none",
    borderRadius : "10px",
    backgroundColor : "green",
    padding : "10px",
    textAlign : "center",
    fontWeight : "bold",
    fontSize : "15px",
    color : "white"
  }
  return (
    <div style={{marginTop : "15px"}}>
      <input type='submit' style={me}></input>
    </div>
  )
}
