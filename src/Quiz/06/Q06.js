import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Q06 extends React.Component {
  state = {
    fruits: ['Apple', 'Mango', 'Grape', 'Peach']
  }

  removeFruit = index => {
    let { fruits } = this.state
    fruits.splice(index, 1)
    this.setState({ fruits })
  }

  render() {
    return (
      <div>
        <ul>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.state.fruits.map((fruit, index) => (
              <li key={index} onClick={this.removeFruit.bind(this, index)}>
                {index + 1}. {fruit}
              </li>
            ))}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}
