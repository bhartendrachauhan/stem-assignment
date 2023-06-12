import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setData } from '../redux/action'

const ComponentB = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <input type='text' onChange={(e)=>{
        dispatch(setData(e.target.value))
        }}/>
    </div>
  )
}

export default ComponentB
