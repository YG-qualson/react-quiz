// Notice how the leave transition is always applied to the last item in the list, even though correct item was removed? This isn’t what we want, is it?
// The reason is because you are not passing an unique key for each child element in the list. Without a unique key, React couldn’t differentiate if the element was removed or just the content is changed.
// So, when you remove the first item in the list, React’s diff algorithm thinks only the content got changed, because the key is not changed. So, it just updates the content and not physically removing the first element from DOM, hence the leave animation is not getting applied. But when it comes to the last element, as one item was already removed from list, React thinks the last item was removed and it physically removes the last item from DOM, thus applying the leave animation.
// To fix, we just need to make sure to pass in a unique key value for each child elements. For our case, we could just pass in the item name, instead of it’s index.
// https://medium.com/@vraa/why-using-an-index-as-key-in-react-is-probably-a-bad-idea-7543de68b17c

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
              <li key={fruit} onClick={this.removeFruit.bind(this, index)}>
                {index + 1}. {fruit}
              </li>
            ))}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}
