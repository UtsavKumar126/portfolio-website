import React from 'react'
import "./styles.css"
import mailImage from "../../assets/images/envelope-4313721_1920.png"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2aa4ltk', 'template_nuipn8m', form.current, {
        publicKey: 'K_UHelwzi-mWLXJNf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Message Not Sent",error.text)
        },
      );
  };
  return (
    <section id='contact' className='mt-48 sm:w-[100%]'>
      <div>
        <h1 className="text-2xl md:text-5xl text-[#5E3BEE] text-center font-bold underline underline-offset-8">Contact Me</h1>
      </div>
      <div className='mt-20 flex md:justify-around md:items-center md:flex-row flex-col'>
        <div className='max-w-[600px] bg-[#F5FCFF] px-16 py-8 rounded-xl'>
          <h3 className='text-2xl font-bold'>Write me a message</h3>
          <form action="" className='flex flex-col justify-start items-stretch gap-4 mt-8' ref={form} onSubmit={sendEmail}>
            <label htmlFor="">Your Name</label>
            <input className='border-2 px-4 py-4 rounded-xl border-[#5E3BEE] ' type="text" placeholder='Enter your name' name="user_name"/>
            <label htmlFor="">Your Email</label>
            <input className='border-2 px-4 py-4 rounded-xl border-[#5E3BEE] ' type="text" placeholder='Enter your email' name="user_email"/>
            <label htmlFor="">Message</label>
            <textarea className='border-2 px-4 py-4 rounded-xl border-[#5E3BEE] ' id="" cols="30" rows="10" placeholder='Write your Message' name="message"></textarea>
            <button className='border-2 px-4 py-4 rounded-xl border-[#5E3BEE] bg-[#5E3BEE] text-white' type="submit" value="Send">Send</button>
          </form>
        </div>
        <img className='md:max-w-[500px] md:block hidden' src={mailImage} alt="" />
      </div>
    </section>
  )
}

export default ContactMe