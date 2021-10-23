import React from 'react'
import { Carousel, Card, Button } from 'react-bootstrap'
import './Home.css'

export const Home = () => {
    return (
        <div className="hm" >
<Carousel>
  <Carousel.Item>
    <img className="blck1" src="../../../../Image/pnrm6.jpeg" alt="slide1" />
    <Carousel.Caption> <h3> Welcome to Mansion </h3> </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="blck1" src="../../../../Image/pnrm3.jpeg" alt="slide1" />
    <Carousel.Caption> <h3> Welcome to Mansion </h3> </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="blck1" src="../../../../Image/pnrm5.jpeg" alt="slide1" />
    <Carousel.Caption> <h3> Welcome to Mansion </h3> </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="crd">
  <h1 className="hed">Our Project</h1>
<div class="row">
    <div class="col-6 col-md-4" >     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="../../../../Image/pxl.jpeg" height="130px" />
  <Card.Body>
    <Card.Title>Office Site</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card> </div>
    <div class="col-6 col-md-4">     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="../../../../Image/vila.jpeg" height="130px" />
  <Card.Body>
    <Card.Title> community  </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
</div >

    <div class="col-6 col-md-4">    
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="../../../../Image/vila2.jpeg" height="130px" />
  <Card.Body>
    <Card.Title>Resident</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card></div>

  </div>

</div>
<div className="ftr">
  
  <div class ="row">
<div class="col-lg-3 col-md-3 col-sm-6">
<i class="fa fa-phone-square" aria-hidden="true">
 <h5> 800-604-1232</h5></i>


</div>
<div class="col-lg-3 col-md-3 col-sm-6">
  <div class="row">
<div class="col-lg-2 col-md-3 col-sm-6 ">
<i class="fa fa-bed" aria-hidden="true"></i>
<div class="col-lg-1 col-md-3 col-sm-6 "></div>
<h5> Hotel</h5>
</div>
</div>
</div>
<div class="col-lg-3 col-md-3 col-sm-6">
<div class="col-lg-2 col-md-3 col-sm-6 ">
  
</div>
<p>Copyright@2021</p>
</div>
<div class="col-lg-3 col-md-3 col-sm-6">
<h5> visit here again</h5>
</div>
</div>

</div>
           </div> 
    )
}
