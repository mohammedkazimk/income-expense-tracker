import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="m-5"><span className="font-bold">Oops.</span> Return to Home Page <Link to="/" className="text-blue-500 hover:underline">Click here</Link></div>
  )
}

export default NotFound