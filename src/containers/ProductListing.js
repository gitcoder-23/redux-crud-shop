import React, {useEffect} from 'react'
import axios from 'axios'
import ProductComponent from './ProductComponent'
// need 2 import to get all data from api 1st
import { useSelector, useDispatch } from 'react-redux'
import {setProducts} from '../redux/actions/productActions'



const ProductListing = () => {
    
    const productsData = useSelector((productState) => productState.allProducts.products)
    // const productsData = useSelector((productState) => productState); //TypeError: productsData.map is not a function
    console.log('ProductListing->', productsData);

    // to get all data from api 2nd 
    const dispatch = useDispatch()


    // to get all data from api 3rd
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log('error', err);
        });
        // to get all data from api 4th
        dispatch(setProducts(response.data));
        console.log('response->', response);
        console.log('response-data->', response.data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log('productsData-data->', productsData);

    
    

    return (
        <div className="ui grid container">
            
            {productsData.map((product) => (
                <ProductComponent product={product} key={product.id} />
            ))}
            
        </div>
    )


    // process to fetch all data
    // const renderList = productsData.map((product) => {
    //     return (
            
    //             <ProductComponent product={product} key={product.id} />                
        
    //     );
    // });

    // return (
    //     <>{renderList}</>
    // );
}

export default ProductListing
