import React, { useState } from 'react';
import AddForm from './components/users/AddForm';
import Userlist from './components/users/Userlist';


function App() {
  const [userList, setUserList] = useState([
    {id:'1',username:'kunal', age:'26'}
  ])
 

  //received form data child data recived form parenet app.js
  const receivedFormData = enteredData =>{
    console.log(enteredData)
    const updatedData ={
      ...enteredData,
      id:Math.random().toString()
    }
    //update the username and age in setUserlist
    setUserList((prevState)=>[...prevState,updatedData])
    console.log('updatedData',updatedData)
  }
  
  return (
    <div >
      <h1 style={{ textAlign: 'center', fontStyle: 'lighter' }}>Time to Make Project</h1>
      <AddForm onAddData = {receivedFormData}/>
      <Userlist items={userList}/>
    </div>
  );
}

export default App;