import './App.css';
import './public.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLaptopCode ,faCogs,faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";


function Feature() {
  return (
    <>
    {/* skill */}
    <div className='w-full h-full flex flex-col justify-center items-center sm:h-full lg:h-full py-20'>
        <div className='w-[90%] flex flex-col justify-center items-center'>
 <h1 className='  font-bold text-3xl lg:text-4x text-blue-500 tracking-tight  '> --- Skill ---</h1>
         <div  id="slide-in" className='h-full w-[70%]  grid grid-cols-1 md:grid-rows-1 gap-20 items-center   mt-[50px] sm:mt-[100px]  sm:ms-60'>
           <div className='border-2 border-white border-solid rounded-xl h-auto  sm:h-auto w-[100%] sm:w-[90%] flex justify-center  bg-white text-black  flex-col'>
            <h5  className='text-1xl   lg:text-2xl  font-bold text-blue-500 tracking-tight m-3 '><FontAwesomeIcon icon={faLaptopCode} />Programming Languages </h5>
            <p className="text-base lg:text-xl font-bold ms-10  mt-2 mb-2">  C , C++ , python  ,Javascript , Data Structure and Algorithm(DSA)  , React. </p>

              <h5  className='text-1xl   lg:text-2xl  font-bold text-blue-500 tracking-tight m-3 '> <FontAwesomeIcon icon={faDev} />Development </h5>
            <p className="text-base lg:text-xl ms-10  mt-2 mb-2 font-bold ">  HTML , Cascading Style Sheets(css),  Javascript , Express.js , React.js, Node js , Database(SQL , Mongoose) </p>
        
             <h5  className='text-1xl   lg:text-2xl  font-bold text-blue-500 tracking-tight m-3 '><FontAwesomeIcon icon={faCogs} /> Technologies And Tool</h5>
            <p className="text-base lg:text-xl ms-10  mt-2 mb-2 font-bold ">  Bootstrap, PostgreSQL,My Sql, Tailwind CSS, Figma , Font Awesome, Canva  . </p>  
           </div>
         </div>      
    </div>
        </div>
        

        {/* project */}
         <div className='w-full h-full flex flex-col justify-center items-center sm:h-full lg:h-full py-10'>
        <div className='w-[90%] flex flex-col justify-center items-center'>
 <h1 className='text-3xl lg:text-4xl  font-bold text-blue-500 tracking-tight  '> --- Project ---</h1>
         <div  id="slide-in" className='h-full w-[70%]  grid grid-cols-1 md:grid-rows-4 gap-20 items-center   mt-[50px] sm:mt-[100px]  sm:ms-60'>
           <div className='border-2 border-white border-solid rounded-xl h-auto  sm:auto w-[100%] sm:w-[90%] flex justify-center  bg-white text-black  flex-col'>
            <h5  className='text-2xl  font-bold text-blue-500 tracking-tight m-3 '><FontAwesomeIcon icon={faProjectDiagram} /> Project</h5>
             <ul className="text-base lg:text-xl font-bold">
              <li className='ms-10  mt-2 mb-2'> Spotify Clone</li>
              <li className='ms-10  mt-2 mb-2'> Airbnd clone</li>
              <li className='ms-10  mt-2 mb-2'> E-commerce Website</li>
              <li className='ms-10  mt-2 mb-2'> Portfolio website </li>
             </ul>
           </div>
      
         </div>      
    </div>
        </div>
    </>
  );
}





 export default Feature;
