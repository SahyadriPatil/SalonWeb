import React from 'react'
import img1 from "../../assets/body.jpg"
import img2 from "../../assets/hair.jpg"
import img3 from "../../assets/bride.jpg"
import img4 from "../../assets/nail.jpg"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Hair from '../services/Hair'
import Services from '../services/services'
const Forher = () => {
  return (
    <div className='forher'>
      <Services/>
        <div >
      <h1 className='herhead' >SERVICES FOR HER</h1>
  </div>
       <div className='imgart'>
    <div className="row">
  <div className="column1">
  <div class="card" >
  <img src= {img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" >HAIR</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/services/hair" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
<div class="card" >
  <img src={img3} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title" >MAKEUP</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/services/makeup" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
<div class="card" >
  <img src={img1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title" >SKIN</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/services/skin" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
<div class="card" >
  <img src={img1} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title" >BODY</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/services/body" class="btn btn-primary" >Go & Get</a>
  </div>
</div>
  </div>
  <div className="column2">
  {/* <div class="card" >
  <img src={img4}class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title" >NAIL</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/nail" class="btn btn-primary" >Go & Get</a>
  </div>
</div> */}

  </div>
</div>
    </div>
    </div>
  )
}

export default Forher
