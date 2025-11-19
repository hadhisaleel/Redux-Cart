import React, { useEffect } from 'react'
import Header from '../componants/Header'
import Footer from '../componants/Footer'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'

function Home() {
  const dispatch =useDispatch()
   const {loading,allProducts,error} =useSelector(state=>state.productReducer)
  //  console.log(allProducts);
   
   useEffect(()=>{
    dispatch(getAllProducts())
   },[])
  return (

    <>
    <Header/>
 <div className='container py-5'>   
 {
  loading?
  <div className='text-center my-5'>
    <img  src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="Loading..." /> 
  </div>:
  <div className="row my-5">
    {/* duplicate */}
   {
   allProducts?.length>0?
   allProducts?.map(product=>(
    <div key={product?.id} className="col-md-3 mb-2">
{/* card */}
<Card >
      <Card.Img variant="top" src={product?.thumbnail} />
      <Card.Body className='text-center'>
        <Card.Title>{product?.title}</Card.Title>
        
        <Link to={`/products/${product?.id}/view`} className='btn btn-primary'>View more..</Link>
      </Card.Body>
    </Card>
    </div>
   ))
   :
   <p className='fs-5 fw-bold my-5'>Product  not found!!!</p>
   }
  </div>}
 </div>
    <Footer/>
    </>
  )
}

export default Home