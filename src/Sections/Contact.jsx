import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';


<IoIosMail />

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      name:data.name,
      email:data.email,
      password:data.message

    }
    try{
      await axios.post('https://getform.io/f/bwnnyeya', userInfo)
      toast.success('Your Message has been Sent');
    }catch (error){
      toast.error('Something went wrong');
    }
  }
  return (
   <>
   <div name='Contact'>
   <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact me</h1>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}           
            // action="https://getform.io/f/bwnnyeya"
            // method="POST"
            className="bg-red-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
               {...register("name", { required: true })}
              
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"

              />
              {errors.name && <span>This field is required</span>}
             
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
              {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
               {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                 {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
               {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 w-32"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      </div>
   </>
  )
}

export default Contact