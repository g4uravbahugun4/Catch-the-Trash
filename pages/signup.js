import { useState, useEffect, useRef } from "react";
import { Form, Button } from "semantic-ui-react";

import Link from "next/link";


import { registerUser } from "../utils/authUser";



function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const { name, email, password, } = user;

  const handleChange = e => {
    const { name, value } = e.target;

   

    setUser(prev => ({ ...prev, [name]: value }));

   
  };


  
  const handleSubmit = async e => {
    e.preventDefault();

 
  

   

    await registerUser(user,setErrorMsg);
  };

  return (
    <>
          

          <div className='  z-0 w-fit  '>
              <img src='/papertrash.png' className='animate-fall absolute z-10 w-1/12' />
          </div>
          <div div className='  z-0 w-fit ml-[10%]  '>
              <img src='/trash1.png' className='animate-fall1 absolute z-10 w-1/12' />
          </div>
          <div div className='  z-0 w-fit ml-[20%]  '>
              <img src='/trash.png' className='animate-fall3 absolute z-10 w-1/12' />
          </div>
          <div div className='  z-0 w-fit ml-[30%]  '>
              <img src='/papertrash.png' className='animate-fall absolute z-10 w-1/12' />
          </div>
          <div div className='  z-0 w-fit ml-[60%]  '>
              <img src='/trash3.png' className='animate-fall2 absolute z-10 w-1/12' />
          </div>
          <div div className='  z-0 w-fit ml-[70%]  '>
              <img src='/papertrash.png' className='animate-fall1 absolute z-10 w-1/12' />
          </div>
          <div div className='  z-0 w-fit ml-[80%]  '>
              <img src='/trash4.png' className='animate-fall3 absolute z-10 w-1/12' />
          </div>
          <div div className='  z-0 w-fit ml-[90%]  '>
              <img src='/papertrash.png' className='animate-fall absolute z-10 w-1/12' />
          </div>







          <section className='bg-cyan-400 h-screen flex flex-col  relative z-0 '>



              <div className='text-black font-bold text-5xl text-center  mt-14 h-auto w-auto'>Catch the Trash</div>


              <Form className='m-auto h-fit bg-teal-600 flex justify-center relative  items-center  w-3/12  ' onSubmit={handleSubmit}>



                  <div className='bg-red p-2 w-full h-full flex flex-col justify-evenly'>
                      <div className='text-yellow-300 text-xl font-bold text-center'>Create Account</div>

                      <div className='ml-[25%]  ' ><Form.Input
                          className=" max-w-full"
                          label='name:'
                          name="name"
                          value={name}
                          onChange={handleChange}></Form.Input>
                          </div>


                      <div className='ml-[25%]  w-auto' ><Form.Input
                          className=" max-w-full"
                          label='email:'
                          name="email"
                          value={email}
                         
                          iconPosition="left"
                          onChange={handleChange}></Form.Input>
                         
                      </div>


                      <div className='ml-[25%]'><Form.Input
                          className=" max-w-full"
                          label='password:'
                          name="password"
                          value={password}
                          type='password'
                          onChange={handleChange}></Form.Input>
                         </div>

                    


                      <div className=' flex  justify-center p-3'><Button className='bg-slate-800 text-white text-lg w-fit p-1 h-auto hover:cursor-pointer hover:text-yellow-300 hover:bg-slate-600 hover:font-bold rounded-md'>Signup</Button></div>

  


                  </div>
                  <div className="text-red-600 text-2xl font-semibold">

                  {errorMsg}
                  </div>

              </Form>
              <div className='m-auto'>
                  <div className='text-white font-semibold flex justify-center text-xl'> or</div>
                  <div className='text-gray-600 text-2xl font-semibold flex justify-center'>already have an account?  </div>
                  <div className='text-gray-600 w-fit ml-[35%] text-2xl hover:text-violet-900 font-semibold hover:font-bold flex justify-center'><Link href="/login">Play Now </Link></div>
              </div>
          </section>
    </>
  );
}

export default Signup;