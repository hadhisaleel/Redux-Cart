import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav, Container, Navbar, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const userWhishlist = useSelector(state=>state.wishlistReducer)
  return (
    <>
      <Navbar expand="lg" className="bg-primary position-fixed w-100 z-1">
        <Container>
          <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'> <FontAwesomeIcon icon={faTruckFast} />Daily Cart</Link></Navbar.Brand>
          <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-md-flex align-items-md-center">
              <Nav className='ms-auto d-md-flex align-items-md-center'>
                <Link to={'whishlist'} className='text-decoration-none text-light fw-bolder d-flex align-items-center '> <FontAwesomeIcon icon={faHeart} className='text-danger me-2' /> Whishlist<Badge bg="secondary">{userWhishlist?.length}</Badge></Link>
                <Link className='text-decoration-none text-light fw-bolder d-flex align-items-center ' to={'cart'}> <FontAwesomeIcon icon={faCartShopping} className='text-success me-1' /> Cart<Badge bg="secondary">20</Badge></Link></Nav>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header