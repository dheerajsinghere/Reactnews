import React, { Component } from 'react'
import img1 from './images/excitingnews.gif'

export class Hero extends Component {
  render() {
    return (
      <>
      
      <div className="d-sm-flex align-items-center justify-content-between w-100" style={{height: "60vh"}}>
  <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
    <span className="text-secondary text-uppercase">ROZANA KHABAR</span>
    <h1 className="display-4 my-4 font-weight-bold">Get Organic &<span style={{color: "rgb(99, 81, 206)"}}> Latest News</span></h1>
    <a href="#" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{borderRadius: "30px" ,backgroundColor: "rgb(99, 81, 206)"}}>Get Started</a>
  </div>
  <div className="col-md-8 h-100 clipped" style={{minHeight: "350px" ,backgroundImage: "url(https://img.freepik.com/free-vector/realistic-news-studio-background_23-2150026874.jpg?t=st=1683702451~exp=1683703051~hmac=3d6fe5052f1f783b78d6c3565b81a47ef34be33800fec50fe47c2cbdf22ec095)" ,backgroundPosition: "center" ,backgroundSize: "cover"}}>

  </div>
</div>


      
      </>
    )
  }
}

export default Hero