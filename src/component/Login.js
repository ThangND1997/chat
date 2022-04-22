
import Button from '@mui/material/Button';
import firebase from '../firebase/config';
import { auth } from '../firebase/config';


function Login () {

    const handleLoginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    const handleLoginWithFaceBook = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        auth.signInWithPopup(provider)
    }

    return(
        <div style={{margin: 'auto'}}>
            <Button variant="outlined" onClick={handleLoginWithGoogle}>Login with Google</Button>
            <Button variant="outlined" onClick={handleLoginWithFaceBook}>Login with FaceBook</Button>
        </div>
    )
}

export default Login