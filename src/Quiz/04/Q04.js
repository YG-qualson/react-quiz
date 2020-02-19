import React, { Component, PureComponent } from 'react'

export default class Q04 extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: '집 사러 가기',
        done: false
      },
      {
        id: 2,
        title: '반차 쓰기',
        done: false
      }
    ]
  }

  handleDone = id => {
    const { todos } = this.state
    const idx = todos.findIndex(todo => todo.id === id)

    todos[idx].done = !todos[idx].done

    this.setState({
      todos
    })
  }

  render() {
    const { todos } = this.state

    return (
      <>
        <Todos items={todos} handleDone={this.handleDone} />
      </>
    )
  }
}

class Todos extends PureComponent {
  render() {
    const { items, handleDone } = this.props
    return (
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => handleDone(item.id)}>
            {item.title} - {item.done ? '완료' : '진행중'}
          </li>
        ))}
      </ul>
    )
  }
}
