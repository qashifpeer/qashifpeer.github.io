import { motion,useViewportScroll, useTransform } from "framer-motion";


const Knowledge = () => {

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 2]);
  
  const cardVariants = {
    offscreen: {
      // y: 300
      // x:300
    },
    onscreen: {
      x:0,
      // y: 50,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1
      }
    }
  };

  return (
    <motion.section
    // style={{ scale }}
    
    className="w-full md:h-screen md:flex my-4 ">
      <div className="left md:w-1/2 ">
        <div className="md:ml-36 ml-12 mt-8 md:mt-28 p-4 bg-white max-w-[75%]">
          <h2 className="text-primary text-4xl font-extrabold w-1/2">
            Engineering
          </h2>
          <motion.p 
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
           className="py-4 text-sm font-light leading-relaxed">
          As a web developer specializing in JavaScript and React, I engineer and optimize responsive, user-friendly websites and web applications. I prioritize frontend development, crafting interactive interfaces, and ensuring seamless user experiences. With a focus on code efficiency and performance, I create dynamic web solutions that meet industry standards and user expectations.
          </motion.p>
        </div>
      </div>
      <div className="right md:w-1/2">
        <div className="md:ml-36 ml-12 mt-8 md:mt-64 p-4 bg-white max-w-[75%]">
          <h2 className="text-primary text-4xl font-extrabold w-1/2">Design</h2>
          <p className="py-4 text-sm font-light leading-relaxed">
          Well I may not call myself a perfect designer but yes as a web developer skilled in Tailwind CSS, I craft visually appealing and highly responsive websites, prioritizing efficient and maintainable design systems. I focus on creating exceptional user interfaces, achieving fast load times, and ensuring seamless user experiences, all while adhering to industry best practices.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Knowledge;
