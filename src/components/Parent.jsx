import React from 'react'
import GrandChild from './GrandChild'

export default function Parent({ propsname }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <p>parent props: {propsname}</p>

      <GrandChild propsname={propsname} />
    </div>
  );
}