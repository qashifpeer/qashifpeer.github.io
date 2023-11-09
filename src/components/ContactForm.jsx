import React, { useRef , useState} from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => toast("Your Details have been submitted!");
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
   
    emailjs
      .sendForm(
        "service_dfv62y8",
        "template_azdyewq",
        form.current,
        "ehQmjTgjk2fv02pqk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-offwhite min-h-screen w-full flex flex-col justify-center items-center">
      <form ref={form} onSubmit={sendEmail}>
        <div className="max-w-[30%]">
          <h1 className="text-primary text-4xl">Send me a message!</h1>
          <p className="py-4 text-lg text-gray">
            Got a question or proposal, or just want to say hello? Go ahead..
          </p>
        </div>
        <div className="flex gap-12  max-w-[70%]">
          <div className="flex flex-col px-4  w-1/2">
            <label
              htmlFor="name"
              className="text-sm text-gray font-light mb-3 w-full"
            >
              Your Name
            </label>
            <input
           
              type="text"
              id='name'
             name= 'user_name'
              placeholder="Enter your name"
              className="bg-offwhite border-b border-gray outline-none w-[200px] focus:border-primary placeholder:text-base placeholder:font-light"
            />
          </div>
          <div className="flex flex-col px-4 w-1/2">
            <label
              htmlFor=""
              className="text-sm text-gray font-light mb-3 w-full"
            >
              Email Address
            </label>
            <input
           
            name="user_email"
              type="text"
              placeholder="Enter your email address"
              className="bg-offwhite border-b border-gray outline-none w-[200px] focus:border-primary placeholder:text-base placeholder:font-light"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-[80%] my-4">
          <label
            htmlFor=""
            className="text-sm text-gray font-light mb-3 w-full"
          >
            Your Message
          </label>
          <textarea
         
           name="message"
            id=""
            cols="70"
            rows="4"
            className="bg-offwhite border-b border-gray resize-none outline-none placeholder:text-base placeholder:font-light overflow-scroll"
            placeholder="Hi! I think we need a website for our products ..."
          ></textarea>

          <div className=" flex justify-center my-4 w-full">
            <Button type="submit" value="Send" text={"shoot"} />
            <ToastContainer />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
