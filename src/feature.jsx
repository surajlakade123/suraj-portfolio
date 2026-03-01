import './App.css';
import './public.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap ,faSquarespace  } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Feature() {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center sm:h-full lg:h-full mt-30'>
        <div className='w-[90%] flex flex-col justify-center items-center'>
 <h1 className='text-3xl lg:text-4xl  font-bold text-blue-500 tracking-tight  '> --- Feature ---</h1>
         <div className='h-70 w-[70%] grid grid-cols-1 md:grid-cols-3 gap-20 items-center   mt-12.5 sm:mt-25'>
           <div  id="card-jump" className='border-2 border-white border-solid rounded-2xl h-full w-[110%] flex justify-center  bg-white text-black items-center flex-col'>
            <h5  className='text-2xl  font-bold text-blue-500 tracking-tight m-3 '><FontAwesomeIcon icon={faBootstrap} />Devloper</h5>
            <p className="text-base lg:text-xl w-[80%]">“Front-end focused web developer with a love for building sleek user interfaces and scalable applications. I turn design concepts into polished web experiences that work beautifully on all devices.”</p>
           </div>
           <div  id="card-jump" className='border-2 border-white border-solid rounded-2xl h-full w-[110%]  bg-white text-black flex justify-center items-center flex-col'>
            <h5 className='text-2xl  font-bold text-blue-500 tracking-tight  m-3  '><FontAwesomeIcon icon={faSquarespace} />Creative Design </h5>
            <p className="text-base lg:text-xl w-[80%]">“Innovative design thinker focused on delivering clean, expressive designs that communicate clear ideas and elevate user interaction. I enjoy solving problems through art and visual storytelling.”</p>
           </div>
           <div id="card-jump"  className='border-2 border-white border-solid rounded-2xl h-[100%] w-[110%]    bg-white text-black flex justify-center items-center flex-col'>
            <h5 className='text-2xl  font-bold text-blue-500 tracking-tight m-3 '><FontAwesomeIcon icon={faLaptopCode} /> Coding & Problem-Solving</h5>
            <p className="text-base lg:text-xl w-[80%]" >“Dedicated coder with strong problem-solving skills — I tackle algorithmic challenges and optimize solutions with clean, efficient code using languages like C, C++, and Python.”</p>
           </div>
         
          
         </div>
       
    </div>
        </div>
        
    </>
  );
}





 export default Feature;
