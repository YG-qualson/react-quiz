/**
 *
 * Promise.all 을 사용하면, 비동기 처리를, 병렬로 진행 할 수 있습니다.
 *
 *
 */
import React, { useEffect, useCallback, useState } from 'react'

function Q02() {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  const whatsup = useCallback(async () => {
    Promise.all([getPosts(), getUser()]).then(([posts, user]) => {
      setUser(user)
      setPosts(posts)
    })
  }, [])

  useEffect(() => {
    whatsup()
  }, [whatsup])

  return (
    <>
      <h1>USER</h1>
      <table>
        <tr>
          <th>이름</th>
          <th>나이</th>
        </tr>
        <tr>
          <td>{user.name}</td>
          <td>{user.age}</td>
        </tr>
      </table>

      <h1>POSTS</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

// dummy func & data

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user)
    }, 2000)
  })
}

const getPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts)
    }, 5000)
  })
}
const posts = [
  {
    id: 1,
    title: 'the release of Letraset sheets containing Lorem Ipsum passages'
  },

  {
    id: 2,
    title: 'simply dummy text of the printing '
  }
]

const user = {
  name: 'parkoon',
  age: 21
}

export default Q02
