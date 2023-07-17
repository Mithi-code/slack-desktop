import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { collection } from "firebase/firestore";
import { db } from "../firebase";


const ChatInput = ({channelName, channelId}) => {
     const [input, setInput ] =  useState('')
    const sendMessage = (e) => {
       e.preventDefault();
       if(channelId){
        return false;
       }
       collection(db, 'rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: db.FieldValue.serverTimestamp(),
        user: 'Mithi',
        userImage: 'https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_1280.png'
       });
       setInput('')
    }
  return (
    <ChatInputContainer>
        <form>
            <input placeholder={`Message #Room`} value={input}
            onChange={(e)=> setInput(e.target.value)}/>
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center; 
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;