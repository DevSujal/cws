import React from 'react'

const CurrenyCalculator = (props) => {
    let me = {
        margin : "15px"
 }
  return (
    <div style={me}>
      <div style={me}>
      <label>Enter Amount in Dollor: {props.amount}</label>
      </div>
      <div style={me}>
      <label>Entered Amount in Rupees: {props.amount * 81.96}</label>
      </div>
      <div style={me}>
      <label>Entered Amount in Euro: {props.amount * 0.91}</label>
      </div>
      <div style={me}>
      <label>Entered Amount in Yuan: {props.amount * 7.18}</label>
      </div>
    </div>
  )

}
    CurrenyCalculator.defaultProps = {
        amount : 0
    }
export default CurrenyCalculator
