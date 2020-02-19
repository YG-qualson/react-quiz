import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Quiz01 from './Quiz/01/Q01'
import Quiz02 from './Quiz/02/Q02'
import Quiz03 from './Quiz/03/Q03'
import Quiz04 from './Quiz/04/Q04'
import Quiz05 from './Quiz/05/Q05'

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
        <li>
          <Link to="/quiz03">03</Link>
        </li>
        <li>
          <Link to="/quiz04">04</Link>
        </li>
        <li>
          <Link to="/quiz05">05</Link>
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
          <Route path="/quiz03">
            <Quiz03 />
          </Route>
          <Route path="/quiz04">
            <Quiz04 />
          </Route>
          <Route path="/quiz05">
            <Quiz05 />
          </Route>
        </div>
      </Switch>
    </>
  )
}

export default Root
