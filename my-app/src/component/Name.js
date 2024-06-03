import React from 'react'
import PropTypes from 'prop-types'

export default function Name(props) {
  let me = {
    width : "60%",
    border : "none",
    borderBottom : "1px solid black",
  }
  return (
    <div style={{margin : "15px"}}>
      <label>Your name : </label>
      <input type="text" style={me}/>
    </div>
  )
}
