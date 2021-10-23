import React from 'react'
import MansionData from '../mansion.json'
import {Link} from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap'
import './Mcat.css'


export const MCat = () => {
    return (
        <div>
                    <CardGroup>
            {
             MansionData.Mansion.map((mval)=> (
                
                 <Card style={{ width: '18rem' }}  className="ctm">
             
                     <Card.Img variant="top" src={mval.m_img} />
                      
                     <Link to ={`/msct/${mval.m_name}`} key={mval.m_id}><h3 className="hnm">{mval.m_name}</h3> <br/></Link>
                     <h4>{mval.descrp}</h4>
                
                 </Card>
                 
             ))

            }
            
            </CardGroup>
    
            <div className="futr">
                <p> copyright@2021mansion </p>
            </div>
            </div>

    )
}
