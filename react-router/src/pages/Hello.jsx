import React, { use } from 'react'
import { Link, useParams } from 'react-router'
export default function Hello() {
  const {nombre} = useParams()
  return (
    <div>
      <h1>Hello Page</h1>
      
<div> el {nombre}</div>
      <p>Welcome to the Hello Page!</p>
    </div>
  )
}