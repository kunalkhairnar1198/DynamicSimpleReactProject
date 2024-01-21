import React from 'react'
import Classes from './Userlist.module.css'
import Card from '../UI/Card'
function Userlist(props) {
    console.log(props.items)
  return (
    <div>
        <h1 style={{ textAlign: 'center', fontStyle: 'lighter' }}>Adding data to App component</h1>
        <Card className={Classes.users}>
        <ul>
            {props.items.map((ele) => (
            <li key={ele.id}>
                {ele.username}
                {ele.age}
            </li>
            ))}
        </ul>
        </Card>
    </div>
  )
}

export default Userlist
