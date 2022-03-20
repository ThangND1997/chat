
import Button from "@mui/material/Button"
import { auth } from "../firebase/config"

function LogOut () {
    return (
        <div style={{position: 'fixed', right: '10px', top: '10px'}}>
            <Button variant="contained" onClick={() => auth.signOut()}>Log Out</Button>
        </div>
    )
}

export default LogOut