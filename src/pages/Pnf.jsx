import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/045/373/552/small_2x/page-not-found-concept-with-people-scene-in-flat-cartoon-design-angry-woman-sees-broken-website-sign-with-access-error-and-page-crash-on-computer-screen-illustration-visual-story-for-web-vector.jpg" alt="" />
      <Link to={'/'} className='btn btn-primary'> Back to Home</Link>
    </div>
  )
}

export default Pnf