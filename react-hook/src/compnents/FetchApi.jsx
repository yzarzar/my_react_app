import axios from 'axios';
import React, { useEffect, useState } from 'react'
//  https://jsonplaceholder.typicode.com/posts
export default function FetchApi() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res)
            setPosts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })
  return (
    <div>
        <ul>
            {
                posts.map((posts) => (
                   <>
                    <li>{posts.id}</li>
                    <li>{posts.title}</li>
                    <li>{posts.price}</li>
                   </>
                ))
            }
        </ul>
    </div>
  )
}
