import React, { useRef, useState } from 'react'
import Classes from './AddForm.module.css'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helper/Wrapper'


function AddForm(props) {
    //use useref to store the input referance values using ref attribute in input field element.
    //that will maintain interanal state in react it doesn't re-render it direactly manipulate Dom element. 
    //that provide less code thant the useState hook is better use useRef .

    const inputNameRef = useRef('')
    const inputAgeRef = useRef('')
    const inputCollegeNameRef = useRef('')

  //that will remove code useState because it re-renders on each input key-stroke useRef provide a declarative less code less tha useState
  
  //this state will handle error shchedule state errormodal
    const [error, setError] = useState(null)


    const onSubmitHandler=(event)=>{
        event.preventDefault()

        //this variable cann access curent input ref values 
        const name = inputNameRef.current.value;
        const age = inputAgeRef.current.value;
        const collegeName = inputCollegeNameRef.current.value;

        console.log('what will get to store useRef and give the object',inputCollegeNameRef)
        //handle the error page for handling error when enter negative age value
        if(parseInt(age) < 0){
          setError({
            title:'Invalid Input',
            message: 'Please enter a valid age only positive value on it'
          });
          return;
        }

        if (name.trim().length === 0 || age.trim().length === 0 || collegeName.trim().length === 0) {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
          return;
        }

        let updatedData = {
            username : name,
            age : parseInt(age),
            college: collegeName
          }
            console.log(updatedData)

            //this props.onAddData this callback function they send data as argument on the App component were is fetch the listdata
          props.onAddData(updatedData)
          
          inputNameRef.current.value ='';
          inputCollegeNameRef.current.value = '';
          inputAgeRef.current.value = '';
          
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
          <input type='text' id='username' ref={inputNameRef} />
          <label>Age(Year)</label>
          <input type='number' id='age' ref={inputAgeRef} />
          <label>CollegeName</label>
          <input type='text' id='age' ref={inputCollegeNameRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card> 
    </Wrapper>
  )
}

export default AddForm
