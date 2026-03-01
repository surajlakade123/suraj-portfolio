import './App.css';
import './public.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center sm:h-full lg:h-full mt-20 '>
<h1 className='text-3xl lg:text-4xl  font-bold text-blue-500 tracking-tight  '  >---Education ---</h1>
<div   className="w-[90%] sm:w-[70%] h-full bg-transparent text-white flex flex-col sm:flex-row justify-center items-center  mt-30">

<div className='hidden min-[400px]:flex flex-col items-center justify-center m-10 '>
    <button  className='h-15 w-30 border-2 border-solid border-white text-2xl  font-bold rounded-2xl mt-5 hover:bg-white hover:text-black'>0-10 </button>
       <button  className='h-15 w-30 border-2 border-solid border-white text-2xl  font-bold rounded-2xl mt-5 hover:bg-white hover:text-black'>11-12 </button>
          <button  className='h-15 w-30 border-2 border-solid border-white bg-white text-black text-2xl  font-bold rounded-2xl mt-5'>Bachelor </button>
        

</div >
<div id="slide-back" className='w-full lg:w-[60%] h-auto min-h-100 bg-white    sm:rounded-[40px] text-black'>
  <h1 className='text-2xl lg:text-3xl font-bold ml-5 mt-5'> <FontAwesomeIcon icon={faBook} /> Rashtrasant Tukadoji Maharaj Nagpur University. </h1>
<h1 className='text-1xl lg:text-2xl font-bold ml-6 mt-1 '>GH raisoni clg Of Engineering</h1>

<p className='text-base lg:text-xl  ml-6 mt-5'>"My journey started at Raga Bhagirath School and Junior College, Himayatnagar. In my early school years, I was a very shy and quiet student, but over time, I pushed myself to become more confident and social. This personal growth helped me excel academically, where I achieved 90% in school.

Though my HSC (56%) was a challenging period, it led me to discover my true interest in technology. I am now pursuing my Engineering in Computer Science (CSE), where I have found my strength, maintaining a current CGPA of 8.4. My path from a reserved student to a focused engineer has taught me that persistence and a positive mindset are the keys to success."</p>

</div>
</div>
    </div>

    </>
  );
}
 
export default Education; 