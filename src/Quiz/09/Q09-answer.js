import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import _ from 'lodash'

function Q09() {
  const [input, setInput] = useState('')
  const debouncedValue = useDebounce(input, 1000)
  const [user, setUser] = useState({})

  const fetchUser = useCallback(async () => {
    console.log('call')
    try {
      const { data } = await githubAPI(input)
      setUser(data)
    } catch (err) {}
  }, [input])

  const handleChange = useCallback(e => {
    setInput(e.target.value)
  }, [])

  useEffect(() => {
    debouncedValue ? fetchUser(debouncedValue) : setUser({})
  }, [debouncedValue, fetchUser])
  return (
    <div>
      <input
        placeholder="Github 계정명을 입력해주세요..."
        value={input}
        onChange={handleChange}
      />
      {!_.isEmpty(user) && <UserInfo info={user} />}
    </div>
  )
}

function useDebounce(value, timeout) {
  const [state, setState] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setState(value), timeout)
    return () => {
      clearTimeout(timer)
    }
  }, [timeout, value])

  return state
}

function UserInfo({ info }) {
  const { avatar_url, name, bio } = info

  return (
    <div className="profile">
      <div className="profile-header">
        <img className="thumbnail" src={avatar_url} alt="user thumbnail" />
        <span>{name}</span>
      </div>
      <h2 className="profile-bio">{bio}</h2>
    </div>
  )
}

// fetch github info
function githubAPI(username) {
  return axios.get(`https://api.github.com/users/${username}`)
}

export default Q09
