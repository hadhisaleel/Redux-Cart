import React from 'react'
import Header from '../componants/Header'
import { Card } from 'react-bootstrap'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../componants/Footer'

function Whishlist() {
  return (
    <>
    <Header/>
 <div className='container py-5'>   
  {/* whishlist with content  */}
  <div className="row my-5">
    <div className="col-md-3 mb-2">
{/* card */}
<Card >
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXU6PFbP5SS16Ahz0afIrxZMa5XDLkMjGQRCBKY3v9lUoxikbXgbdZgZHhHF0A_-Op1xFlUEyD7xuajRjSBTVLcoYotca7h8w4D4fNRc7H8jXSfJS8-Nyv" />
      <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        
        <div className="d-flex my-1 justify-content-evenly "> 
          <button className='btn text-danger fs-4'>
            <FontAwesomeIcon icon={faHeartCircleXmark} />
          </button>
          <button className='btn text-success fs-4'>
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </Card.Body>
    </Card>
    </div>
  </div>
 </div>
 <Footer/>
    </>
  )
}

export default Whishlist