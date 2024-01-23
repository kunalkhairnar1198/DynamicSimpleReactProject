import React, { useState } from 'react'
import Classes from './AddForm.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helper/Wrapper'


function AddForm(props) {
    const [enterName, setEnterName]=useState('')
    const [enterAge, setEnterAge]=useState('')
    const [error, setError] = useState(null)

    const userNameChangeHandler=(event)=>{
      setEnterName(event.target.value)
    }

    const userAgeChangeHandler=(event)=>{
      setEnterAge(event.target.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault()

        //handle the error page for handling error when enter negative age value
        if(enterAge < 0){
          setError({
            title:'Invalid Input',
            message: 'Please enter a valid age only positive value on it'
          });
          return;
        }

       

        if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
          return;
        }
    

    let updatedData = {
        username : enterName,
         age : enterAge
       }
        console.log(updatedData)

        //this props.onAddData this callback function they send data as argument on the App component were is fetch the listdata
       props.onAddData(updatedData)
       setEnterName('')
       setEnterAge('') 
    }

    const closeModalHandler =()=>{
      setError(null)
    }

  return (
    // this wrapper and card compoent pass as an props jsx element into the wrapper component
    <Wrapper>
       {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModalHandler}
        />
      )}
      <Card className={Classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label>UserName</label>
          <input type='text' id='username' value={enterName} onChange={userNameChangeHandler}/>
          <label>Age(Year)</label>
          <input type='number' id='age' value={enterAge} onChange={userAgeChangeHandler}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card> 
    </Wrapper>
  )
}

export default AddForm
