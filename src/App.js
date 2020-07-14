import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core/';
import './App.css';
import db from './firebase'
import Message from './Message';

function App() {
  const [ input, setInput ] = useState('')
  const [ messages, setMessages ] = useState([{username: 'sonny', text: 'hey, whats up?'}])
  const [ username, setUsername ] = useState('')
  
  console.log(messages)

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Plss, enter your name: '))
  }, [])

  const sendMessage = event => {
    event.preventDefault()
    setMessages([...messages, {username, text: input}])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Clever Programmer</h1>
      <h2>Welcome {username}</h2>

      <form>

      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send message</Button>
      </FormControl>

      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }

    </div>
  );
}

export default App;

