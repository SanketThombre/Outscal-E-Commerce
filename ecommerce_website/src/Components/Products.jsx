
import { useEffect } from "react";
import { getData } from "../Redux/Products/action";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import "./Products.css"





const Container = styled.div`
width:90%;
height:auto;
// border: 1px solid gray;
margin:25px auto;
display:grid;
grid-template-columns:repeat(4,1fr);
grid-template-rows:auto;
grid-gap:15px;
padding:20px;
`;

const ProductCards = styled.div`
border: 0.5px solid gray;
border-radius:8px;
text-decoration: none;
color: black;
`;

const Button = styled.button`
padding:8px 25px;
border-radius: 8px;
margin:10px auto;
background-color:#3A3845;
color:#F7CCAC;
cursor:pointer;
`;

export const Products = () => {
    const dispatch = useDispatch();
   
    const { products } = useSelector((state) => state.products);
   
   
    useEffect(() => {
       
        dispatch(getData());
       
    }, [])
    


    return (
        <>
        <h1>Product Page</h1>

            <Container>
                {products.map((el, i) =>
              
                <ProductCards key={el._id} >
                    <div className="prod_img">

                        <img className="img1" width="100%" height="350px" src={el.images[0]} alt="Image" /> 
                        <img className="img2" width="100%" height="350px" src={el.images[1]} alt="Image" /> 
                       
                    </div> 
                    <p >{el.name}</p>
                    <p >{el.price}</p>
                    <Button>ADD TO CART</Button>
          
                        </ProductCards>
                       
            )}
            </Container>
            
        </> 

    )
}