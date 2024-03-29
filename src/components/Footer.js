import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <>
      
<div className="customcontainer my-5 px-0">

  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: "#6351ce"}}
             >
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="/" className="text-white me-4">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fa fa-google"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fa fa-linkedin"></i>
        </a>

      </div>
    </section>

    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3 mx-0 px-0">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Rozana Khabar</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px; background-color: #7c4dff; height: 2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px; background-color: #7c4dff; height: 2px"}}
                />
            <p>
              <a href="#!" className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-white">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-white">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-white">Bootstrap Angular</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px; background-color: #7c4dff; height: 2px"}}
                />
            <p>
              <a href="#!" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px; background-color: #7c4dff; height: 2px"}}
                />
            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>

    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2023 Copyright:
      <a className="text-white" href="/"
         > Rozana Khabar</a>
    </div>
  </footer>

</div>

      </>
    )
  }
}

export default Footer