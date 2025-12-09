import React from 'react'

export default function CustomButton({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}