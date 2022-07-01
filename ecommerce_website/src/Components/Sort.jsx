import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";
import {prodsuccess} from "../Redux/Products/action"


const Main = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0px;
height:50px;
background-color: teal
`;



export const Sorting = () => {
    const dispatch = useDispatch();
   
    
    const {products} = useSelector((state) => state.products);
   
    // console.log(products)
   
    let prod = products;

    // console.log(price)
    let handleSort = (val) => {
        if (val == 1) {
            prod.sort((a, b) => {
                return Number(a.price.slice(2).replace(",", "")) - Number(b.price.slice(2).replace(",", ""))
            })
        }
        else {
            prod.sort((a, b) => {
                return Number(b.price.slice(2).replace(",", "")) - Number(a.price.slice(2).replace(",", ""))
            })
        }
       
        dispatch(prodsuccess(prod))
      
    }

    
    return (
        <Main>
            <div>
            <Link style={{ textDecorationLine: "none" }} to="/above"> <Button variant="outlined"  style={{backgroundColor:"white"}}>Price_Above 20K</Button> </Link>      
            <Link style={{ textDecorationLine: "none" }} to="/below"> <Button variant="outlined"  style={{backgroundColor:"white"}}>Price_Below 20K</Button> </Link>      
            <Link style={{ textDecorationLine: "none" }} to="/"> <Button variant="outlined"  style={{backgroundColor:"white"}}>All Products</Button> </Link>      
            <Link style={{ textDecorationLine: "none" }} to="/men"> <Button variant="outlined"  style={{backgroundColor:"white"}}>Men</Button> </Link>      
            <Link style={{ textDecorationLine: "none" }} to="/women"> <Button variant="outlined"  style={{backgroundColor:"white"}}>Women</Button> </Link>      
         
            </div>
            <div>
                <Button variant="outlined" onClick={() => {handleSort(2)}} style={{backgroundColor:"white",marginRight:"10px"}}>Price High to Low</Button>
                <Button variant="outlined" onClick={() => { handleSort(1) }} style={{backgroundColor:"white"}}>Price Low to High</Button>
            </div>
            
           
        </Main>
    )
}