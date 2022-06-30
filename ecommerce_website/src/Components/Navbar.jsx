import {Link} from "react-router-dom";
import { logout } from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"




export const Navbar = () => {
    const navigate = useNavigate();
const dispatch = useDispatch();
    const { isauthenticated, username, id } = useSelector((state) => state.login);
    const {count} =  useSelector((state) => state.cart);

    
    console.log(count,"count")

    return (
        <div style={{ 
            width: '100%',
            height:"50px",
            display: 'flex',
            justifyContent: "space-evenly",
            position: "sticky",
            top: "0px",
            zIndex:"1",
            // border: "1px solid black",
            alignItems: "center", 
            backgroundColor:"#F7E9D7"
        }}>
            <Link style={{ textDecorationLine: "none" }} to="/"> <Button variant="outlined" >Products</Button> </Link>
            {isauthenticated ? `Welcome ${username}` : <Link style={{textDecorationLine:"none"}}to="/login"><Button variant="outlined">Login</Button></Link> }
            
            <Link style={{textDecorationLine:"none"}}to="/register"> <Button variant="outlined">SignUp</Button></Link>
            <Button variant="outlined" onClick={() => dispatch(logout())}>LogOut</Button>

            
        </div>
    )
}