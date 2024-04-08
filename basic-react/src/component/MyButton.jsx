import React from 'react'

export default function helloComponent() {
  function MyButton() {
    return (
      <button>I'm a button.</button>
    );
  }
  return (
    <div>
        <h1>Welcome to my app!</h1>
        <MyButton />
    </div>
  )
}
