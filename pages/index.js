import {  useState } from 'react'

import GameUi from './../components/GameUi';
import Navbar from './../components/Navbar';





export default function Home({ user }) {
  const [renderGameUi, setRenderGameUi] = useState(false)


  const onclick = (e) => {
    e.preventDefault();
    setRenderGameUi(true)
    console.log("clicked to start game");

  }

   return (

    <>

      {renderGameUi===true ? <GameUi user={user} /> : <>

        <Navbar user={user.name} />
        <main className='h-screen -z-10 bg-lime-300 m-auto flex flex-row justify-evenly '>

          <div className='font-medium  justify-center m-auto text-xl w-[8192rem] p-5 text-black'>There will be a bucket at the bottom of the page. And from the top right corner, random garbage will keep falling down. The goal of the game is that the user will grab that garbage with their mouse, drag it and drop it inside the bucket. If they drop it inside, they get a +1 score.Try to drop as many garbage as possible in the bucket till the time runs out. You have 60 seconds.

            <div className='flex justify-center'><button className='bg-red-600 h-10 text-yellow-300 font-semi-bold m-auto rounded-md ' onClick={onclick}>Start Game</button></div>

          </div>

        </main>
      </>}
  </>

      )
    
}
