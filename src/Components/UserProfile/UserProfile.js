import React,{useState} from "react";
import User from "./User"
import "./UserProfile.css";
const UserProfile = (props) =>
{


return (<div className="user-data">
    {props.details.map((detail)=>{
        return <User key={detail.id} detail={detail}></User>; 
    })}
    
    
</div>)


}
export default UserProfile;