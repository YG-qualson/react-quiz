/**
 *
 * normal vs debounce vs throttle : https://webclub.tistory.com/607
 */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import throttle from 'lodash/throttle'

function Q07() {
  const [boxes, setBoxes] = useState(
    Array.from(new Array(10), n => ({ title: 'box' }))
  )

  useInfiniteScroll(addBox)

  function addBox() {
    setBoxes(prevState => [...prevState, { title: 'box' }]) // good
    // setBoxes([...boxes, { title: 'box' }]) bad!
  }

  return (
    <>
      {boxes.map((box, index) => (
        <StyledBox color={getRandomColor()}>{index}</StyledBox>
      ))}
    </>
  )
}

// styled
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ color }) => `3px solid ${color}`};
  width: 420px;
  height: 150px;
  margin-bottom: 20px;
  font-size: 3rem;
  color: ${({ color }) => color};
`

// helper
const getRandomColor = () => {
  const colors = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#34495e',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#7f8c8d'
  ]

  return colors[Math.floor(Math.random() * colors.length)]
}

// custom hook
function useInfiniteScroll(callback) {
  const handleScroll = throttle(e => {
    if (
      document.body.scrollHeight <
      window.innerHeight + window.scrollY + 200
    ) {
      callback()
    }
  }, 200)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [handleScroll])
}

export default Q07
