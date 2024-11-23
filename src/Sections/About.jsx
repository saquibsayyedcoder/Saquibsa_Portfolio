import React from "react";
//import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    
    <section name='About' className="pr-4 bg-secondery text-black px-20 bg-gradient-to-r " id="about">
      <div  className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h1 className="ml-8 text-violet-500 font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
           ABOUT ME
          </h1>
          <h1 className="ml-8 text-3xl font-medium">Better Know Me</h1>

          <p className="ml-8 mb-5">
            Hi, My Name Is Saqib Sayyed. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
            I am proficient in Frontend skills like <span className="text-pink-500">React.js</span>, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
            In backend I know Node.js, Express.js, MongoDB, and Mongoose
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
            Beyond technical skills, my creativity shines through in my ability to think outside the box and innovate. Whether it’s through interactive animations, seamless transitions, or engaging user interactions, I aim to create experiences that leave a lasting impression. My journey as a Front-End Developer is driven by a relentless passion for creating beautiful, functional, and user-centered web applications.

Feel free to adjust or expand on this to better match your personal experiences and style! If there's anything else you'd like to highlight or any specific details you'd like to include, just let me know.
          </p>
        </div>

        <div className="about-img">
         
        </div>
      </div>
    </section>
  );
};

export default About;