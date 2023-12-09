import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div class="container-fluid p-0 m-0" >
  {/* <!-- Footer --> */}
  <footer class="text-center text-dark" style={{background:'#80C1EF'}}>
    {/* <!-- Grid container --> */}
    <div class="container">
      {/* <!-- Section: Links --> */}
      <section class="mt-5">
        {/* <!-- Grid row--> */}
        <div class="row text-center d-flex justify-content-center pt-5">
          {/* <!-- Grid column --> */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <NavLink to='/imprints' className='text-dark'> 
                    Imprints
              </NavLink>
            </h6>
          </div>
          {/* <!-- Grid column --> */}


          {/* <!-- Grid column --> */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
            <NavLink to='/tandc' className='text-dark'> 
                    Terms of Use
              </NavLink>
            </h6>
          </div>
          {/* <!-- Grid column --> */}


          {/* <!-- Grid column --> */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">Partnership</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          

          {/* <!-- Grid column --> */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">Help</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">Contact</a>
            </h6>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      <hr class="my-5" />

      {/* <!-- Section: Text --> */}
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Section: Text --> */}

      {/* <!-- Section: Social --> */}
      {/* <section class="text-center mb-5">
        <a href="" class="text-dark m-4">
          <i class="fab fa-facebook-f fa-2x" ></i>
        </a>
        <a href="" class="text-dark m-4">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="" class="text-dark m-4">
          <i class="fab fa-google fa-2x"></i>
        </a>
        <a href="" class="text-dark m-4">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="" class="text-dark m-4">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="" class="text-dark m-4">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </section> */}
      {/* <!-- Section: Social --> */}
    </div>
    {/* <!-- Grid container --> */}
        <br />
        
  </footer>
  {/* <!-- Footer --> */}
</div>
{/* <!-- End of .container --> */}
</>
  )
}

export default Footer
