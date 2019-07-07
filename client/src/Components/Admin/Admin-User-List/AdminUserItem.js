import React from 'react'

export default function AdminUserItem(props) {
    return (
        <tr>
            <td>{props.key}</td>
            <td>{props.data.firstName + " " + props.data.lastName}</td>
            <td>{props.data.job}</td>
            <td>{props.data.created}</td>
        </tr>
    )
}
