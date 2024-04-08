import React, { useState } from 'react'

export default function ArraysAsState() {
    const [items,setItems] = useState([]);
    const [fruit,setFruit] = useState("");
    const addItems = () => {
        setItems([...items, fruit])
    }
  return (
    <div>
        <h2>Add Fruits</h2>
        <input type="text"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)} />
        <button onClick={() => addItems()}>Add Items</button>
        
        <ul>
            {
                items.map((i) => (
                    <li key={i}>{i}</li>
                ))
            }
        </ul>

    </div>
  )
}
