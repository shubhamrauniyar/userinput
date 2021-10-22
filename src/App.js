import './App.css';
import React ,{useState} from "react";
import UserInput from './Components/UserInput/UserInput';
import ErrorLog from './Components/ErrorLog/ErrorLog';
import UserProfile from './Components/UserProfile/UserProfile';
function App() {
  const [users,AddUser]=useState([]);
  const [invalid,setInvalid]=useState(false);
  const  [userData,addUserData]=useState([]);
  const [msg,setMsg]=useState("No Issues");

  const buttonHandler=()=>
  {
    setInvalid((prev)=>{ return !prev});
    
  }
  
  const AddUserHandler=(detail)=>
  {

   
   if(detail.uname.trim().length===0)
   {
    setMsg("Enter Correct Name");
    console.log(msg);
    setInvalid(true);
   
     
   }
   else if(detail.uage<=0)
   {
   
    setMsg("Enter Correct Age");
    console.log(msg);
     setInvalid(true);
     
     
   }
   else
   {
    addUserData((prev)=>{
      return [detail,...prev];
    })
   }
  }
  
  return (
    <div>
      <ErrorLog dismsg={msg} onButtonClick={buttonHandler} isInvalid={invalid}></ErrorLog>
    <div className="user-home" style={(invalid)?{opacity:0.3}:{}}>

    
    <UserInput onAddUser={AddUserHandler}></UserInput>
  
    <UserProfile details={userData}></UserProfile>
    
    </div>
    
    
    </div>
  );
}

export default App;
