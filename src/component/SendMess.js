
import Button from "@mui/material/Button";
import Input from "@mui/material/Input"
import firebase from "../firebase/config";
import { useState } from "react";
import { db, auth } from '../firebase/config'
function SendMess ({ scroll }) {
    const [message, setMessage] = useState('')
    const handleSendMess = async () => {
        const {uid, photoURL, displayName} = auth.currentUser
        if(message !== '') {
            setMessage('')
            await db.collection('chatbox').add({
                text: message,
                displayName,
                uid,
                photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        scroll.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }
    return(
        <div style={{margin: 'auto'}}>
            <Input  placeholder="Nhập tin nhắn" value={message} onChange={e => setMessage(e.target.value)}/>
            <Button variant="contained" onClick={handleSendMess}>Gửi</Button>
        </div>
    )
}

export default SendMess;