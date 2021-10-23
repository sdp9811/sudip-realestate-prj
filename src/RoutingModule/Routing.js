import React from 'react'
import { Route,Switch , BrowserRouter as Router } from 'react-router-dom'
import { Login } from '../Authentication/Login/Login'
import { Registration } from '../Authentication/Registration/Registration'
import { About } from '../Component/About/About'
import { Home } from '../Component/Home/Home'

import { Header } from '../Layout/Header/Header'
import { MCat } from '../Mansion/MCategory/MCat'
import { MDetails } from '../Mansion/Mdetails/MDetails'
import { MSubcat } from '../Mansion/MSubcat/MSubcat'
import { Protected } from './Protected'

export const Routing = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path= "/" component={Home} />
              <Route path="/Reg" component={Registration}></Route>
              <Route path="/lgn" component={Login}></Route>
              <Route path="/abt" component={About}></Route>
              < Protected path="/mcat" component={MCat} ></Protected>
              <Route path="/msct/:mname" component={MSubcat} ></Route>
              <Route path="/mdet/:mname/:sid" component={MDetails} ></Route>
            </Switch>
            
        </Router>
    
    )
}
