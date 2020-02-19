import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Quiz01 from './Quiz/Q01'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/quiz01">01</Link>
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
        <div class="container">
          <Route path="/quiz01">
            <Quiz01 />
          </Route>
        </div>
      </Switch>
    </>
  )
}

export default Root
