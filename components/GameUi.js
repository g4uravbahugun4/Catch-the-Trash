import React, { useEffect } from 'react'

import { useState } from 'react'
import Navbar from './Navbar'

import Router from 'next/router'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'

import cookie from "js-cookie";
import GameEnd from './gameEnd'



export const Axios = axios.create({
  baseURL: `${baseUrl}/api/highscores`,
  headers: { Authorization: cookie.get("token") }
});

function GameUi({ user }) {

  const trash = new Audio('/trash.mp3')

  const [score, setScore] = useState(0)

  const [hidden, setHidden] = useState(false)
  const [hidden1, setHidden1] = useState(false)
  const [hidden2, setHidden2] = useState(false)
  const [hidden3, setHidden3] = useState(false)
const [showGameEnd, setShowGameEnd] = useState(false)

  const [timer, setTimer] = useState(10)
 
  

  
  
  useEffect(() =>  {
  
    const func = async () => {
    console.log(timer)
        if (timer === 0) {
         
          
         Axios.post("/", { score })
         setShowGameEnd(true)
     
          setTimer(60)
            
            
          }
    };

  

    setTimeout(() => {
      console.log(timer)
      setTimer(timer - 1)
    }, 1000)
  
    func(); // 
  
    
   
    

}) 
 

 


 



  const mouseOndustbin = e => {
    console.log(e.target.class)
    e.target.style.width = '40%'
  }


  const dragstart = e => {
    console.log("drag started")

  }

  const ondrag = e => {
    e.preventDefault();
    console.log("being dragged")
    e.target.style.cursor = "pointer"

    setHidden(true)
  }
  const ondrag1 = e => {
    e.preventDefault();
    console.log("being dragged")
    e.target.style.cursor = "pointer"

    setHidden1(true)
  }
  const ondrag2 = e => {
    e.preventDefault();
    console.log("being dragged")
    e.target.style.cursor = "pointer"

    setHidden2(true)
  }
  const ondrag3 = e => {
    e.preventDefault();
    console.log("being dragged")
    e.target.style.cursor = "pointer"

    setHidden3(true)
  }

  const ondrop = e => {
    e.preventDefault();
    trash.play();
    e.target.style.width = '33.333333%'
    console.log("drag end")
    setScore(score + 1)
    setHidden(false)
    setHidden1(false)
    setHidden2(false)
    setHidden3(false)
  }


  const ondropwrong = e => {
    e.preventDefault();

    setHidden(false)
    setHidden1(false)
    setHidden2(false)
    setHidden3(false)
  }

  const ondragover = e => {
    e.preventDefault();
  }
  return (


    <> {showGameEnd===false?<>
           
            <Navbar user={user.name} />
            <main className='h-screen flex bg-pink-300 overflow-hidden -z-10' onDrop={ondropwrong}>


        <div className='w-2/6 bg-slate-500 text-black font-bold text-2xl select-none' draggable='false' unselectable='on'  onselectstart="return false" onDragOver={ondragover}>Score:{score} <br></br>  <div> timer:{timer} </div>
             
            


                <img src='/dustbin.png' unselectable='on'  draggable='false' className='w-2/6 flex mt-[50vh] ml-[30%] ' onDragOver={mouseOndustbin} onDrop={ondrop} ></img>
              </div>

              <div className='w-2/3 bg-blue-400 flex ' onDragOver={ondragover}  >

          {!hidden ? <div className='w-fit h-fit animate-fall  delay-500 p-[5%] '><img src='/trash.png' className='ml-5 w-[70%] hover:cursor-pointer  ' draggable='true' onDrag={ondrag} onDragStart={dragstart}  ></img></div> : null}

          {!hidden1 ? <div className='w-fit h-fit  animate-fall p-[5%]'><img src='/trash2.png' className='w-[80%] hover:cursor-pointer' draggable='true' onDrag={ondrag1} onDragStart={dragstart}  ></img></div> : null}

          {!hidden2 ? <div className='w-fit h-fit animate-fall2  delay-200 p-[5%]'><img src='/trash3.png' className='w-auto hover:cursor-pointer     ' draggable='true' onDrag={ondrag2} onDragStart={dragstart}  ></img></div> : null}

          {!hidden3 ? <div className='w-fit h-fit animate-fall3 p-[5%]'><img src='/trash4.png' className='w-[50%] hover:cursor-pointer      ' draggable='true' onDrag={ondrag3} onDragStart={dragstart}  ></img></div> : null}




                
                
              </div>

            </main>
      
</>:<GameEnd score={score} 
setScore={setScore}
  user={user}
setShowGameEnd={setShowGameEnd}

/>

          

}
    </>





  )
}

export default GameUi