import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((allPro) => allPro.allProducts.products)
    console.log('products->', products);
    // "products[0]" array have one record
    const {id, title, category} = products[0];

    return (
        <div className="four wide column">
           <div className="ui link cards">
               <div className="card">
                   <div className="image"></div>
                   <div className="content">
                       <div className="header">{title}</div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default ProductComponent
