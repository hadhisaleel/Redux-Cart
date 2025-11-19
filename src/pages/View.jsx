import React, { useEffect, useState } from 'react'
import Header from '../componants/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from '../componants/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/whishlistSlice'

function View() {

const userWishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()
  const {id} = useParams()
  console.log(id);
  // state for storing product tobe view
  const [product,setproduct] = useState({})
// console.log(product);

  useEffect(()=>{
     if(sessionStorage.getItem("products")){
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setproduct(allProducts.find(item=>item.id==id))
     }
  },[])

  const handleWishlist = ()=>{
       const existingProduct = userWishlist?.find(item=>item.id==id)
       if (existingProduct) {
        alert("product already in wishlist...")
       } else {
        // add product to wishlist in redux store-dispatch action
        dispatch(addToWishlist(product))
       }
  }
  
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img src={product?.thumbnail} alt="" className="img-fluid" />
          <div className="d-flex justify-content-evenly mt-5">
            <button onClick={handleWishlist} className='btn btn-primary'>ADD TO  WHISHLISt</button>
            <button className='btn btn-success'>ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product?.title}</h1>

          <h3 className='text-danger fw-bolder'> ${product?.price}</h3>
          <h4>Brand :{product?.brand}</h4>
          <h4>Catogary:{product?.category}</h4>
          <h4>Description :{product?.description}</h4>
          <h5 className='my-3'>Client Review</h5>
         {/* duplicate Review */}
        
         
        {
           product?.reviews?.length>0?
          product?.reviews?.map((item,index)=>(
            <div key={index} className="border rounded p-3 shadow">
            <p>
              <span className='fw-bolder'>{item?.reviewerName} </span> {item?.comment}
            </p>
            <p>Rating :{item?.rating} <FontAwesomeIcon icon ={faStar} className='text-warning'/></p>

          </div>
          )):
          <div>no client review are available</div>
        }
        
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default View