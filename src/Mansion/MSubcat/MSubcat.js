import React from 'react'
import MansionData from '../mansion.json'
import {Link} from 'react-router-dom'
import { Card,Button, CardGroup} from 'react-bootstrap'
import './MSubcat.css'

export const MSubcat = ({match})=>{
    let subCatValue = MansionData.Mansion.find((data)=> data.m_name === match.params.mname);
     console.log("subcat value is: ", subCatValue);

    return (

        <CardGroup className="mcdgp">

            {
                subCatValue.sub_cat.map((mdata)=>(
            
  <Card className="mscd" >
    <Card.Img variant="top" src={mdata.sub_img} />
    <Card.Body>
      <Card.Title>{mdata.City}</Card.Title>
      <Button variant="warning">
      <Link to={`/mdet/${match.params.mname}/${mdata.s_id}`} >view detail</Link>
      </Button>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  ))}
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

</CardGroup>

    )
}
