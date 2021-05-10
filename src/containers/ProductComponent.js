import React from 'react'


const ProductComponent = ({product}) => {
    
    // "products[0]" array have one record
    const {id, title, image, price, category} = product;

    return (
            <div className="four wide column">
           <div className="ui link cards">
               <div className="card">
                   <div className="image">
                       <img src={image} alt={title} />
                   </div>
                   <div className="content">
                       <div className="header">{title}</div>
                       <div className="meta price">$ {price}</div>
                       <div className="header">{category}</div>
                   </div>
               </div>
           </div>
        </div>
        
    )
}

export default ProductComponent
