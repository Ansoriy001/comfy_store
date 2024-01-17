import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <>
      <Navbar />
      <div className='text-center pt-16 dark:text-white text-[#394E6A] h-[100vh]'>
        <h1 className='text-6xl font-bold mb-5'>We love <span className='bg-blue-500 md:inline block w-[90%] mx-auto  dark:bg-[#FF7AC6] text-white rounded-2xl px-3'>comfy</span></h1>
        <p className='md:w-[60%] text-left mx-auto text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam odit, officiis eos mollitia alias, doloremque, aspernatur ratione asperiores voluptas labore minus dolores reprehenderit corporis quos. Assumenda molestias harum dignissimos?</p>
      </div>
    </>
  )
}

export default About