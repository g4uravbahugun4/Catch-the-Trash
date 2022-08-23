import {   useState } from "react";
import { Button } from 'semantic-ui-react'
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { parseCookies } from "nookies";

import Router from 'next/router'
import Navbar from './../components/Navbar'
function Highscores({user,users}) {
  
  const [points,setPoint] = useState(users,[]);  

    
    const mainmenu=()=>{
        Router.push('/')
    }
    return (
        <>
           <Navbar user={user.name}/>
            <main className='h-screen flex justify-center bg-lime-300 p-20  '>

                <section className='w-9/12 bg-lime-500 overflow-y-auto scroll-smooth text-center text-3xl font-bold'>High Scores
                {points.users.map(user => (
         
      
         <div className='flex flex-row justify-between p-7 ' key={1}>

         <div className='text-blue-700 text-xl ml-[20%] font-sans' key={user._id}>{user.name}</div>
         <div className='text-white text-xl font-sans mr-[20%]' key={user._id}>{user.point}</div>

     </div>
           
           ))}
                   

                    <footer className='mb-[2%] text-base font-semibold'><Button className='bg-teal-700 text-teal-300 rounded-lg p-[5px] hover:text-yellow-300 hover:text-lg hover:bg-cyan-600' onClick={mainmenu}>Main Menu</Button></footer>



                </section>

            </main>

        </>
    )
}

export const getServerSideProps = async ctx => {
    try {
      const { token } = parseCookies(ctx);
  
      const res = await axios.get(`${baseUrl}/api/highscores`, {
        headers: { Authorization: token }
      });
  
      return { props: { users: res.data } };
    } catch (error) {
      return { props: { errorLoading: true } };
    }
  };

export default Highscores