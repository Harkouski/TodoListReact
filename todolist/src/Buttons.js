import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import App from './App'

function Buttons() {
  return (
        <Router>
          <div className='Route'>
            <div className="state">
              <Link to="/ToDoApp">Full App</Link>
            </div>
            <Switch>
              <Route path="/ToDoApp">
                <App/>
              </Route>
            </Switch>
          </div>
        </Router>
  )
}

export default Buttons