import React from 'react'

function Skills() {
  return (
    <div name='Skills' id="about" className=" px-10 dark:bg-white bg-gradient-to-r ">
    <div
      className="container mx-auto  flex flex-col-reverse lg:flex-row items-center gap-20"
    >
     
      <div className="relative">
        <img
          className="h-1/4 absolute top-0 left-0 -z-10"
          src="img\dots.png"
          alt=""
        />
        <div className="h-full rounded-full overflow-hidden">
          <img src="./img/portrait.png" alt="" />
        </div>
      </div>
      
      <div className="my-auto flex flex-col gap-3">
        <h1 className="text-violet-500 font-bold  mb-5 border-b-[5px] w-[180px] border-indigo-600">MY SKILLS</h1>
        <h1 className="text-3xl font-medium dark:text-black">Better Design</h1>
        <h1 className="text-3xl font-medium dark:text-black">
          Better Experience
        </h1>
        <p className="text-black">
          I design and build digital products. I'm also a multi-disciplinary
          maker with over 2 years of experiences in wide range of design
          disciplines.
        </p>
        <h2 className="text-gray-900 font-medium">HTML</h2>
        <div classn="w-full bg-gray-900 h-1.5 rounded-md">
          <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
        </div>
        <h2 className="text-gray-900 font-medium">CSS</h2>
        <div classn="w-full bg-gray-900 h-1.5 rounded-md">
          <div className="w-3/4 bg-indigo-600 h-1.5 rounded-md"></div>
        </div>
        <h2 className="text-gray-900 font-medium">Tailwind CSS</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md">
          <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
        </div>
        <h2 className="text-gray-900 font-medium">Javascript</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md">
          <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
        </div>
        <h2 className="text-gray-900 font-medium">React</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md">
        <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
        </div>
        <h2 className="text-gray-900 font-medium">Postgre SQL</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md">
        <div className="w-3/5 bg-indigo-600 h-1.5 rounded-md"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills