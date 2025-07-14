import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div
      style={{
        margin: '1rem 0',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center'
      }}
    >
      <p style={{ fontWeight: 'bold' }}>Demo Counter: {count}</p>
      <button
        style={{
          padding: '0.5rem 1.2rem',
          fontSize: '1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}
