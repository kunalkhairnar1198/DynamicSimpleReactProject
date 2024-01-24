import React, { useState } from 'react';
import AddForm from './components/users/AddForm';
import Userlist from './components/users/Userlist';


function App() {
  const [userList, setUserList] = useState([
    {id:'1',username:'kunal', age:'26', college:'K.A.A.N.M.S.College Satana'}
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
    <React.Fragment>
      <AddForm onAddData = {receivedFormData}/>
      <Userlist items={userList}/>
    </React.Fragment>
  );
}

export default App;