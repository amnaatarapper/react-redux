import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../redux'

function HooksIcecreamContainer () {
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecreams} </h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  )
}

export default HooksIcecreamContainer