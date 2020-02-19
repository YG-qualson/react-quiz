import React, { Component, PureComponent } from 'react'
import produce from 'immer'

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

  // 해결책 1
  // handleDone = id => {
  //   const { todos } = this.state
  //   const updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.done = !todo.done
  //     }
  //     return todo
  //   })
  //   this.setState({
  //     todos: updatedTodos
  //   })
  // }
  // 해결책 2
  // handleDone = id => {
  //   const { todos } = this.state
  //   const idx = todos.findIndex(todo => todo.id === id)
  //   this.setState({
  //     todos: [
  //       ...todos.slice(0, idx),
  //       {
  //         ...todos[idx],
  //         done: !todos[idx].done
  //       },
  //       ...todos.slice(idx + 1, todos.length)
  //     ]
  //   })
  // }

  // 해결책 3
  // handleDone = id => {
  //   const { todos } = this.state
  //   const idx = todos.findIndex(todo => todo.id === id)

  //   this.setState({
  //     todos: produce(todos, draft => {
  //       draft[idx].done = !draft[idx].done
  //     })
  //   })
  // }

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
