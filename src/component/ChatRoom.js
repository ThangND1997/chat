import LogOut from "./LogOut"
import { auth, db } from "../firebase/config"
import { useState, useEffect, useRef } from 'react'
import style from './ChatRoom.module.scss'
import clsx from 'clsx'
import SendMess from "./SendMess"

function ChatRoom () {

    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('chatbox').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))

            setMessages(data)
        })
        
    }, [])

    return(
        <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <LogOut />
            <ul className={style.wrapMess}>
                {messages.map(({text, id, displayName, photoURL, uid}) => (
                    <li ref={scroll} key={id} className={`${uid === auth.currentUser.uid ? clsx(style.messMe) : clsx(style.messBox)}`}>
                        <img style={{width: '45px', borderRadius: '50%', margin: '0 10px'}} src={photoURL}/>
                        <h3 style={{margin: '16px 10px'}}>{text}</h3>
                    </li>
                ))}
            </ul>
            <SendMess scroll={scroll}/>
        </div>
    )
}

export default ChatRoom