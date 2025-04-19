import { motion } from "framer-motion";

import { styles } from "../styles";

import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pr-0`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="w-90 ">
          <h1 className={`${styles.heroHeadText} text-white`}>
          Master Skills with Fun Challenges  <br className='sm:block hidden' />
          <span className='text-[#915EFF]'> </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Engage with comprehensive content and test yourself through <span className='text-[#915EFF]'>quizzes </span>  and contests designed to motivate.
          </p>
        </div>
      


       {/* <multiIconball icons={technologies.icon}/>    */}
      <Spline
        scene="https://prod.spline.design/f47lAlS7J4Lmh4IG/scene.splinecode" 
      />
      
      
    

        {/* <Spline
        scene="https://prod.spline.design/T-2I9eQISaNgVteI/scene.splinecode" 
      /> */}
  {/* <ComputersCanvas />       */}
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
