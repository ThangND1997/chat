
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
            <audio src="https://vnso-zn-15-tf-mp3-s1-zmp3.zmdcdn.me/f2418f925bd6b288ebc7/2993144109324927938?authen=exp=1657550185~acl=/f2418f925bd6b288ebc7/*~hmac=a31094e95f1e4f606ca2fcf1f4fa38c4&fs=MTY1NzM3NzM4NTgxNHx3ZWJWNnwwfDU0LjE3NS4xNzMdUngMzY" />
        </div>
    )
}

export default SendMess;