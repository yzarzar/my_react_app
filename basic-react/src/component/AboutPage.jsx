import React from 'react'

export default function AboutPage() {
    const user = {
        name: 'Hardy Lever',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 80
    }
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
