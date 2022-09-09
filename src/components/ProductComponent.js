import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products);
    // const {id, title} = products[0];
      console.log(products)

      const renderProducts = products.map((product)=>{
        const {id, title, price, category, image} = product;
        return(
          <div className="cards" style={{display: "flex"}} key={id} >
            <Link to={`/product/${id}`} style = {{color: "black", textDecoration:"none"}}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    Price:  {price}
                  </Card.Text>
                  <Card.Text style={{fontSize:"18px", fontWeight:"normal"}}>
                    Category:  {category}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
              </div>
        )
      })
  return (
  
    <div>
        {renderProducts}
    </div>
        
       
   
  )
}

export default ProductComponent