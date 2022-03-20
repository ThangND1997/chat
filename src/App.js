import './App.css';
import Login from './component/Login';
import ChatRoom from './component/ChatRoom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/config';


function App() {
  const [user] = useAuthState(auth)
  return (
        <div style={{width: '100%', height: '100vh', display: 'flex'}}>
            {user ? <ChatRoom /> : <Login />}
        </div> 
  )
}

export default App;
