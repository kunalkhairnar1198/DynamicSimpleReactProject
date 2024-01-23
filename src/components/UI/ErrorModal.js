import React from 'react';

//when you make portal component they use ReactDom in this component
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './Error.module.css';

const Backdrop =(props)=>{

  return  <div className={classes.backdrop} onClick={props.onConfirm} />

}
//thsi two seprate components compoents 
const ModalOverlay = (props)=>{

  return (
    <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
  </Card>
  )
} 

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card> */}

      {/* createPortal this method is help us to render Error modal component outside the root element Dom tree that means ErrorModal compo render different places  */}
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}

        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;