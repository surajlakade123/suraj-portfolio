import './App.css';
import './public.css'
import myphoto from "./assets/myphoto.jpeg"
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram ,faFacebook } from "@fortawesome/free-brands-svg-icons";





function Home() {
  return (
    <>
      <div className="bg-transparent h-full w-full text-black-900 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-45 "> 
        <div  class="info" id="slide-in" className='ms-5 lg:ms-80'>
          <h5 className='text-3xl'> <b>_____ Hello</b></h5>
          <h1 className='text-4xl mt-3 '> <b>I Am <span className=' text-blue-400'> Suraj Lakade</span></b></h1>
          <h4 className='text-2xl mt-3'><b>Developer  |<span className='text-blue-400'> Designer</span> </b></h4>
          <p className="text-base lg:text-xl  mt-5 ">
            "Hi, I'm Suraj Lakade, a passionate Web Developer and B.Tech student at GHRCE Nagpur, 
            graduating in 2027. I specialize in building responsive, user-centric web applications 
            using modern frameworks and clean code practices. My goal is to bridge the gap between 
            complex logic and seamless user experiences."
          </p>
          <div  className="text-2xl lg:text-4xl mt-5     ">
        
          <a href="https://www.linkedin.com/in/suraj-lakade-321273304"> <FontAwesomeIcon className='opacity-50 hover:opacity-100 hover:scale-120 transition duration-300'  icon={faLinkedin} /></a> 
            <FontAwesomeIcon  className='opacity-50 hover:opacity-100 hover:scale-120 transition duration-300' icon={faInstagram} />
            <FontAwesomeIcon  className='opacity-50 hover:opacity-100 hover:scale-120 transition duration-300' icon={faFacebook} />
          </div>
             <div  className="text-2xl lg:text-4xl mt-5   ">
     <button  className='h-10 w-40 border-2 border-solid border-blue-400 text-base  text-blue-400   shadow-[0_20px_150px_0_rgba(0,188,255,0.5)] font-bold rounded-2xl mt-7'><Link to="/About">More About Me  </Link> </button>
          </div>
            
        </div>
        <div className='flex justify-center align-center' >
  
  <img className="h-70 w-70   lg:h-100 lg:w-100 object-cover object-center transition-transform duration-700 rounded-full shadow-[0_20px_70px_0_rgba(90,70,70,2)]" src={myphoto} alt="Description of my photo" />
        </div>
      </div>
    </>
  );
}

export default Home;