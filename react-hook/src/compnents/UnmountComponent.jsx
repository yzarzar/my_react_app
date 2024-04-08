import React, { useState } from 'react'
import UseEffect3 from './UseEffect3';

export default function UnmountComponent() {
    const [display,setDisplay] = useState(true);
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle DIsplay</button>
        {display && <UseEffect3/>}
    </div>
  )
}
