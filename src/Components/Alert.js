import React from 'react'

export default function Alert(props) {

    const capitalize = (word) =>
    {
        const lower1= word.toLowerCase();
        return lower1.charAt(0).toUpperCase() + lower1.slice(1);
    }
  return (
    <div style={{height: '50px'}} >
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong> {capitalize(props.alert.type)} </strong>: {props.alert.message}
    </div>}
  </div>
    
  )
}
