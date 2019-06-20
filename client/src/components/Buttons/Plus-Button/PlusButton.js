import React from 'react'

export default function PlusButton(props) {
    return (
        <button style={{borderRadius:"50%"}} onClick={props.click}>
            <i className="fas fa-plus fa-5x"></i>
        </button>
    )
}
