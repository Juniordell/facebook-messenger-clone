import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core/';
import './App.css';
import Message from './Message';
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [ input, setInput ] = useState('')
  const [ messages, setMessages ] = useState([{username: 'sonny', message: 'hey, whats up?'}])
  const [ username, setUsername ] = useState('')
  const [ logged, setLogged ] = useState(false)
  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', "desc")
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  const login = () => {
    setLogged(true)
  }



  // useEffect(() => {
  //   setUsername(prompt('Plss, enter your name: '))
  // }, [])

  const sendMessage = event => {
    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([...messages, {username: username, message: input}])
    setInput('')
  }

  return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100' alt='logo'></img>
      <h1 className='text-dark'>Messenger</h1>
      { !logged && 
        <div className="container">
            <h2 className='textLogin'>Login</h2>
            <div className="app__input2">
              <Input className='textUser text-dark' type='text' placeholder='Your name...' onChange={event => setUsername(event.target.value)} />
              <button onClick={login}>Confirm</button>
            </div>
        </div>  
      }
      { logged &&
      <h2 className='welcome text-dark'>Welcome <span className='spanUser'>{username}</span>!</h2> 
      }
      { logged && 
        <form className='app__form bg-dark'>

        <FormControl className='app__formControl bg-dark'>
          <Input className='app__input text-dark bg-dark' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
  
          <IconButton 
          className="app__iconButton"
          disabled={!input} 
          variant='contained' 
          color='primary' 
          type='submit' 
          onClick={sendMessage}>
            <SendIcon />
          </IconButton>
  
        </FormControl>
  
        </form> 
      }
    
      { logged && 
         <FlipMove className='flip'>
         {
           messages.map(({id, message}) => (
             <Message key={id} username={username} message={message} />
           ))
         }
       </FlipMove>
      }
   
      

    </div>
  );
}

export default App;

