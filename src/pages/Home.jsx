import React from 'react'
import Header from '../componants/Header'
import Footer from '../componants/Footer'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (

    <>
    <Header/>
 <div className='container py-5'>   
  <div className="row my-5">
    {/* duplicate */}
    <div className="col-md-3 mb-2">
{/* card */}
<Card >
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXU6PFbP5SS16Ahz0afIrxZMa5XDLkMjGQRCBKY3v9lUoxikbXgbdZgZHhHF0A_-Op1xFlUEyD7xuajRjSBTVLcoYotca7h8w4D4fNRc7H8jXSfJS8-Nyv" />
      <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        
        <Link to={'/products/id/view'} className='btn btn-primary'>View more..</Link>
      </Card.Body>
    </Card>
    </div>
  </div>
 </div>
    <Footer/>
    </>
  )
}

export default Home