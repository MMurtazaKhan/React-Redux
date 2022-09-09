import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from "axios";
import {setProduct} from "../redux/actions/productAction"


const ProductListing = () => {
   
    const products = useSelector((state)=>state.allProducts.products);
    const dispatch = useDispatch()
  

    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err", err)
        });
       dispatch(setProduct(response.data))
    }

    useEffect(()=>{
        fetchData();
        // console.log(" Products: ",products)
    }, [])
  return (
    <div>
       
   <ProductComponent/> 
   
   
    </div>
  )
}

export default ProductListing