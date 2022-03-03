import React from 'react'
import { BrowserRouter as Route,Router,Switch } from 'react-router-dom'


export const Compra = () => {
  return (
    <div>
        <h1>Compra</h1>
       <Router>
           <Route path="/">
               <h4>Home</h4>
           </Route>
           <Route path="/acerca">
               <h4>Acerca</h4>
           </Route>
       </Router>
    </div>
  )
}
