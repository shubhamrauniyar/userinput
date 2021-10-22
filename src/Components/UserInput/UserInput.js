import React,{useState} from "react";
import "./UserInput.css";


const UserInput=(props)=>
{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const nameChangeHandler=(event)=>
    {

      setName(event.target.value)
    }
    const ageChangeHandler=(event)=>
    {
        setAge(event.target.value)
    }
   const AddUserHandler=(event)=>
   {
       event.preventDefault();
       const details={
           uname:name,
           uage:age,
           id:Math.random(),
       }
       setAge('');
       setName('')
       props.onAddUser(details)
      
   } 
return(
    <div className="form-control">
        <form onSubmit={AddUserHandler} className="form-control-input">
            <label>UserName:</label>
            <input onChange={nameChangeHandler} value={name} name="name" type="text" placeholder="Enter Your Name"></input>
            <label>Age(Years)</label>
            <input onChange={ageChangeHandler} value={age} name="age" type="number" placeholder="Age"></input>
            <button type="submit">Add User</button>
        </form>
    </div>
);
}

export default UserInput;