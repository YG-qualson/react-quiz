import React from 'react'
import getDisplayName from 'recompose/getDisplayName'

function Q08({ title }) {
  return <div>{title}</div>
}
function withHook(Component, displayName) {
  class Wrapper extends React.Component {
    render() {
      return <Component title="High Ordered Component" />
    }
  }

  Wrapper.displayName = `withSomething_${getDisplayName(Component)}`

  return Wrapper
}

export default withHook(Q08, 'QUIZ8')
