import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Quiz01 from './Quiz/01/Q01'
import Quiz02 from './Quiz/02/Q02-promise.timeout'

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/quiz01">01</Link>
        </li>
        <li>
          <Link to="/quiz02">02</Link>
        </li>
      </ul>
    </nav>
  )
}

function Root() {
  return (
    <>
      {Nav()}
      <Switch>
        <div className="container">
          <Route path="/quiz01">
            <Quiz01 />
          </Route>
          <Route path="/quiz02">
            <Quiz02 />
          </Route>
        </div>
      </Switch>
    </>
  )
}

export default Root
