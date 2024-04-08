import React, { useEffect, useState } from 'react'

export default function UseEffect3() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const logMousePosition = (e) => {
        console.log("this is mouse event.")
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log("useEffect is called.");
        window.addEventListener('mousemove',logMousePosition)
        return () => {
            window.removeEventListener('mousemove ', logMousePosition);
            console.log('Component is unmounted, and code is clean. ')
        }
    })
  return (
    <div>
        <p>mouse position</p>
        coordiname X,Y - {x},{y}
    </div>
  )
}
