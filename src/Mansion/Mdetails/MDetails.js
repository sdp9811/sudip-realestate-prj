import React from 'react'
import MansionData from '../mansion.json'
import { Card } from 'react-bootstrap';
import './MDetails.css'

export const MDetails = ({match}) => {
let MansionName = MansionData.Mansion.find((data)=>data.m_name === match.params.mname);
console.log("mname", MansionName);
let MansiondDet=MansionName.sub_cat.find((data)=> data.s_id === match.params.sid);
console.log("mdet", MansiondDet);


    return (
        <div className="det">
                    <Card className="dimg" >
  <Card.Img   className="cimg" variant="top"  src={MansiondDet.sub_img} />
  
  <Card.Body>
    <Card.Title>Price: {MansiondDet.Price}</Card.Title>
    <Card.Text>
    The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website,
     an advertising product or an editorial production whose final text is not yet ready. This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels
    
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    
  </Card.Body>
</Card>
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
