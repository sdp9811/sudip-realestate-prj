import React from 'react'
import { Card, CardGroup} from 'react-bootstrap'

export const About = () => {
    return (
        <div className="Container">
            <h1 className="text-center text-danger my-5px"> About </h1>
            <h5>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, 
              and discover plugins for your favorite writing, design and blogging tools.
               Explore the origins, history and meaning of the famous passage, and learn how 
               Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.</h5>
        
          <div className="crdabt">   <div  class="row">
    <div  class="col" >
    <Card style={{ width: '19rem' }} my="5px" className="crdbt">
  <Card.Img variant="top" src="../../../../Image/amn8.jpeg"  height="115px"/>
  <Card.Body>
    <Card.Title>Play Ground</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
    </div>
    <div class="col">
    <Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="../../../../Image/amn.jpeg" height="115px" />
  <Card.Body>
    <Card.Title>exercise</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
    </div>
    <div class="col">
    <Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src="../../../../Image/amn4.jpeg" height="115px" />
  <Card.Body>
    <Card.Title>Kids garden</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
    </div>

</div>
</div> 
<CardGroup >
<Card style={{ width: '18rem' }} height="90px" >
  <Card.Body>
    <Card.Title>Mission</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} >
  <Card.Body>
    <Card.Title>Vision</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Achievement</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
</CardGroup>
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
