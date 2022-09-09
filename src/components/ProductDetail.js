import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProduct } from '../redux/actions/productAction';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./productDetail.css"

const ProductDetail = () => {
  const { productId } = useParams()
  console.log(productId);

  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  console.log(product)

  const {id, title, category, price, image} = product;

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => console.log(err))
      dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId])

  return (
    <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={image} /></div>
						
						</div>

						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{title}</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
						</div>
            <span class="review-no">{category}</span>
						<p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 class="price">current price: <span>$ {price}</span></h4>
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 class="sizes">sizes:
							<span class="size" data-toggle="tooltip" title="small">s</span>
							<span class="size" data-toggle="tooltip" title="medium">m</span>
							<span class="size" data-toggle="tooltip" title="large">l</span>
							<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 class="colors">colors:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ProductDetail