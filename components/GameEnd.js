import React from 'react'
import Router from 'next/router'
import Navbar from './Navbar'

function GameEnd({user,score,setShowGameEnd,setScore}) {

    const tryAgain=()=>{
        setScore(0)
        setShowGameEnd(false)
      Router.push('/')
    }
    const viewHighScores = () => {
        Router.push('/highscores')
    }
  return (
      <> 
      <Navbar user={user.name}  />
       <main className='h-full -z-10 bg-lime-300 flex flex-col m-auto text-8xl  text-center justify-evenly'><div>Your Score:{score}</div>
          <div><button className='bg-slate-800 h-10 p-[revert] hover:text-3xl hover:h-12 text-white text-2xl font-semi-bold  rounded-md ' onClick={tryAgain}>Try Again</button></div>

          <div><button className='bg-violet-900 h-10 p-[revert] hover:text-3xl hover:h-12 text-white text-2xl font-semi-bold  rounded-md ' onClick={viewHighScores}>View High Scores</button></div>

      </main></>
  )
}

export default GameEnd