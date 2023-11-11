import React, { useRef , useState} from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({user_name: '', user_email : '', message : ''})
  // const formRef = useRef();

  const notify = () => toast("Well! , we have got your message, will get in touch soon..");
    
    const handleChange = (e) => {
      setForm({...form,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      setIsLoading(true);

      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name : form.user_name,
          to_name : "Qashif",
          from_email : form.user_email,
          to_email : 'mail.qashifpeer@gmail.com',
          message : form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(()=>{
        setIsLoading(false);
        notify();
        setForm({user_name:'', user_email: '', message: ''})
      }).catch((error)=>{
        setIsLoading(false)
        console.log(error)
        //TODO : SHOW ERROR Alert
      })
    }


  return (
    <section className="bg-offwhite min-h-screen w-full ">
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col justify-center items-center md:w-1/2 mx-auto">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-primary text-4xl">Send me a message!</h1>
          <p className="py-4 text-lg text-gray">
            Got a question or proposal, or just want to say hello? Go ahead..
          </p>
        </div>
        <div className="flex gap-12  w-full ">
          <div className="flex flex-col px-4 ">
            <label
              htmlFor="name"
              className="text-sm text-gray font-light mb-3 w-full"
            >
              Your Name
            </label>
            <input
            type="text"
            name= 'user_name'
            value={form.user_name}
            onChange={handleChange}
            required
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
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
              required
              value={form.user_email}
              onChange={handleChange}
              className="bg-offwhite border-b border-gray outline-none w-[200px] focus:border-primary placeholder:text-base placeholder:font-light"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-4 my-4 ">
          <label
            htmlFor=""
            className="text-sm text-gray font-light mb-3 w-full"
          >
            Your Message
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            className="bg-offwhite border-b border-gray resize-none outline-none placeholder:text-base placeholder:font-light overflow-scroll"
            placeholder="Hi! I think we need a website for our products ..."
          ></textarea>

          <div className=" flex justify-center my-4 w-full">
            <Button 
            type="submit"
            disabled = {isLoading} 

            
            text={isLoading ? "Sending..." : "Send Message"} >
              
               </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
