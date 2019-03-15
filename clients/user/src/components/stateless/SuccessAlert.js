import React from 'react'

export default (props) => {
  return (
    <div className="alert alert-success" role="alert" onClick={props.click}>
        <h3>{ props.msg }</h3>
    </div>
  )
}
