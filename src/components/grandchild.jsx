import React from 'react'

export default function GrandChild({ propsname }) {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>grandchild props: {propsname}</p>
    </div>
  );
}