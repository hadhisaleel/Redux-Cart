import React from 'react'
import Header from '../componants/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXU6PFbP5SS16Ahz0afIrxZMa5XDLkMjGQRCBKY3v9lUoxikbXgbdZgZHhHF0A_-Op1xFlUEyD7xuajRjSBTVLcoYotca7h8w4D4fNRc7H8jXSfJS8-Nyv" alt="" className="img-fluid" />
          <div className="d-flex justify-content-evenly mt-5">
            <button className='btn btn-primary'>ADD TO  WHISHLISt</button>
            <button className='btn btn-success'>ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>Title</h1>

          <h3 className='text-danger fw-bolder'> $price</h3>
          <h4>Brand :</h4>
          <h4>Catogary:</h4>
          <h4>Description :</h4>
          <h5 className='my-3'>Client Review</h5>
          {/* duplicate Review */}
          <div className="border rounded p-3 shadow">
            <p>
              <span className='fw-bolder'>Username : </span> message
            </p>
            <p>Rating : number <FontAwesomeIcon icon ={faStar} className='text-warning'/></p>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View