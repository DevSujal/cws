import React from 'react'

const Submit = () => {

    let me = {
        textAlign : "center",
    }

    let you = {
        width : "90%",
        backgroundColor : "green",
        color : "white",
        border : "none",
        borderRadius : "5px",
        margin : "5px",
        padding : "5px"
    }

  return (
    <div style={me}>
      <button type = "submit" style={you}>
        Convert
      </button>
    </div>
  )
}

export default Submit
