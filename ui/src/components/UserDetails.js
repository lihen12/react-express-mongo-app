import React from "react";

const UserDetails = ({ user }) => {
    return (
        <div className="user-details">
            <h4>{user.username}</h4>
            <p><strong>Value: </strong>{user.value}</p>
        </div>
    )
}

export default UserDetails