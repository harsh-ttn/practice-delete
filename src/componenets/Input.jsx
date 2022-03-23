import React from 'react'

const Input = ({type, value}) => {
  
  if(value == " "){
    console.log("Incorrect Input")
  }

  return (
    <input type={type} value={value} />
  )
}

export default Input