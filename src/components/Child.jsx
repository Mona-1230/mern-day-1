import React from 'react'
import CustomButton from './CustomButton'

export default function Child({ propsname, onIncrement }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>child props: {propsname}</p>
      <CustomButton onClick={onIncrement}>
         Increment Parent
      </CustomButton>
    </div>
  )
}
