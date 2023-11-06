import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="bg-offwhite min-h-screen w-full flex flex-col justify-center items-center">
      <div className="max-w-[30%]">
        <h1 className="text-primary text-4xl">Send me a message!</h1>
        <p className="py-4 text-lg text-gray">
          Got a question or proposal, or just want to say hello? Go ahead..
        </p>
      </div>
      <div className="flex gap-12  max-w-[80%]">
        <div className="flex flex-col px-4  w-1/2">
          <label
            htmlFor=""
            className="text-sm text-gray font-light mb-3 w-full"
          >
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-offwhite border-b border-gray outline-none w-[300px] focus:border-primary placeholder:text-base placeholder:font-light"
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
            type="text"
            placeholder="Enter your email address"
            className="bg-offwhite border-b border-gray outline-none w-[300px] focus:border-primary placeholder:text-base placeholder:font-light"
          />
        </div>
      </div>
      <div className="flex flex-col max-w-[80%] my-4">
        <label htmlFor="" className="text-sm text-gray font-light mb-3 w-full">
          Your Message
        </label>
        <textarea
          name=""
          id=""
          cols="70"
          rows="4"
          className="bg-offwhite border-b border-gray resize-none outline-none placeholder:text-base placeholder:font-light overflow-scroll"
          placeholder="Hi! I think we need a design system for our products ..."
        ></textarea>
        <div className=" flex justify-center my-4 w-full">
        <Button text={'shoot'} />

        </div>
        
      </div>
    </div>
  );
};

export default Contact;
