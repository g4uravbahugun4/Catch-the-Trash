import React from 'react'

function Navbar ({user}) {
  return (
   
    <div className='h-10 text-white  flex text-center font-bold p-2 items-center justify-center bg-pink-900 text-2xl' >Welcome {user}   </div>
  )
}

export default Navbar