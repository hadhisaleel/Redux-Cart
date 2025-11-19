import React from 'react'
import Header from '../componants/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Footer from '../componants/Footer'

function Cart() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
      <div className="my-5">
        <h1 className="text-danger fw-bolder">Cart Summary</h1>
        <div className="row mt-5">
          <div className="col-md-8 border runded p-5">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quality</th>
                  <th>Price</th>
                  <th>...</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>title</td>
                  <td><img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXU6PFbP5SS16Ahz0afIrxZMa5XDLkMjGQRCBKY3v9lUoxikbXgbdZgZHhHF0A_-Op1xFlUEyD7xuajRjSBTVLcoYotca7h8w4D4fNRc7H8jXSfJS8-Nyv" alt="" /></td>
                  <td> 
                    <div className="d-flex">
                      <button className="btn fs-4 fw-bolder">-</button>
<input style={{width:'50px'}} value={10} className='form-control' type="text" readOnly />
                      <button className="btn fs-4 fw-bolder">+</button>
                    </div>

                  </td>
                  <td>4 200</td>
                  <td><button className="btn text-danger"> <FontAwesomeIcon icon={faTrash}/></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-5">
              <h3 className="fw-bolder">Total Amount : <span className='text-danger'> $ 19.</span></h3>
              <hr/>
              <div className="d-grid mt-2">
                <button className='btn btn-success'> CHECK OUT</button>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart