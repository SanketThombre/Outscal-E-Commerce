import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const {isauthenticated} =useSelector((state) => state.login) 
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        
    }
    return (
        <div>
            <h1>Login</h1>
            <TextField
          required
          id="outlined-required"
                label="UserName"
                value={user}
          onChange={(e) =>setUser(e.target.value)}
            />
            <br />
            <br/>
            <TextField
                type="password"
          required
          id="outlined-required"
                label="Password"
        value = {password}
         onChange={(e) =>setPassword(e.target.value)}
            />
            <br />
            <br/>
            <Button variant="contained" onClick={() => handleSubmit()}>Login</Button>

        </div>
    )
}