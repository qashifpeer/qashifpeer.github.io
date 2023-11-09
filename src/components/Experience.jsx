import { motion, useViewportScroll, useTransform } from "framer-motion";
import experience from "../assets/experience.svg";

const Experience = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <motion.section
      style={{ scale }}
      className="w-full min-h-screen md:flex bg-primary"
    >
      <div className="md:w-[35%] max-w-[80%] pt-8">
        <h1 className="text-4xl text-secondary md:ml-36 ml-12 font-extrabold">
          Over the years,
        </h1>
        <p className="pt-3 text-white text-sm md:ml-36 ml-12 leading-relaxed">
          I started my carrier as laravel developer and successfully completed
          various projects, using php framework Laravel, with server side
          rendering as blade templating engine and client side as vue js. Infact
          php has much evolved over the years.
        </p>

        <p className="pt-3 text-white text-sm md:ml-36 ml-12 leading-relaxed">
          Joining kashosoft was sudden transition in my web developing carrier.
          I found inclined towards react and starting building projects. And
          from then I am love with react and I find react-tailwind bond amazing.
        </p>
        <p className="pt-3 text-white text-sm md:ml-36 ml-12 leading-relaxed">
          I gained extensive experience developing diverse projects, including
          school management systems, e-commerce platforms, and travel websites,
          leveraging React, JavaScript, and Tailwind CSS. I am proficient in
          building interactive user interfaces, ensuring great end-user
          experiences, and optimizing web applications for performance. A proven
          track record in delivering high-quality solutions.
        </p>
      </div>
      <div className="md:w-[65%] w-full flex justify-center items-center">
        <div className="w-[80%] py-6">
          <img
            src={experience}
            alt="experience"
            className="w-full bg-primary"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
