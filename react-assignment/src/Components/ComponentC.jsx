import React from 'react'
import { useSelector } from 'react-redux'

const ComponentC = () => {
    const selector = useSelector(state => state)
  return (
    <div>
      {selector}
    </div>
  )
}

export default ComponentC
