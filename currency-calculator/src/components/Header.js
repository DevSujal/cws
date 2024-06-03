import React from 'react'

const Header = () => {
    let me = {
        backgroundColor: "grey",
        padding: "5px",
        borderRadius: "5px",
        color: "white",
        textAlign: "center",
        margin : "10px 5px 10px 5px"
    }
  return (
    <div  style={me}>
      <h3>Currency Calculator</h3>
    </div>
  )
}

export default Header
