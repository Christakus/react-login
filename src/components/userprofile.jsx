import React from 'react'

const UserProfile = props => {

    return (
        <table>
            <tbody>
            <tr>
                <td>{props.fullName}</td>
                <td>{props.username}</td>
                <td>{props.email}</td>
                <td>{props.password}</td>
            </tr>
            </tbody>
        </table>
    );
}

export default UserProfile;