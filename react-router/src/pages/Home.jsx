import React from 'react'
import { Link } from 'react-router'
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      
            <Link to="/About"> hola</Link> 

      <p>Welcome to the Home Page!</p>
    </div>
  )
}