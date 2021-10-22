import React from "react";
import "./User.css"
const User=(props)=>
{
    return <div className="user-detail">
        <div>{props.detail.uname}</div>
        <div> ({props.detail.uage}  Years Old)</div>

    </div>
}


export default User;
