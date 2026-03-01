import './App.css';
import './public.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow , faAt , faBell} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
    
    <div className='w-full h-full flex flex-col justify-center items-center sm:h-full lg:h-full mt-20 '>
<h1 className='text-3xl lg:text-4xl font-bold text-blue-500 tracking-tight  '  >--- Contact Me ---</h1>
<div   className="w-[90%] sm:w-[70%] h-full bg-transparent text-white flex flex-col sm:flex-row justify-center items-center  mt-30">

<div className='hidden min-[400px]:flex flex-col items-center justify-center m-15 '>
    <div  className='h-20 w-60   mt-5'>
         <h1 className='text-3xl  text-blue-500'> <FontAwesomeIcon icon={faLocationArrow} /> Location</h1>
         <p className='text-xl'>Nagpur,Maharastra</p>
       </div>
    <div  className='h-20 w-60   mt-5'>
         <h1 className='text-3xl  text-blue-500'> <FontAwesomeIcon icon={faAt} /> Email</h1>
         <p className='text-xl'>suarajlakade088@gmail.com</p>
       </div>
    <div  className='h-20 w-60  mt-5 '>
         <h1 className='text-3xl  text-blue-500'> <FontAwesomeIcon icon={faBell} />call</h1>
         <p className='text-xl'>+91-98****434</p>
       </div>
    

</div >
<div className='w-full lg:w-[50%] h-auto min-h-100 border-2 border-soild border-white   flex justify-center items-center flex-col sm:rounded-[20px]  shadow-[0_0_50px_0_rgba(70,80,81,1)]'>
<input 
  type="text" 
  placeholder="Name..." 
  className="w-[70%] px-4 py-2 border-2 text-xl font-bold border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 m-5 text-white"
/>
<input 
  type="text" 
  placeholder="Subject..." 
  className="w-[70%] px-4 py-2 border-2 text-xl font-bold border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 m-5 text-white"
/>
<input 
  type="text" 
  placeholder="Email..." 
  className="w-[70%] px-4 py-2 border-2 text-xl font-bold border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 m-5 text-white"
/>
<input 
  type="text" 
  placeholder="Your text..." 
  className="w-[70%]  h-30 px-4 py-2 border-2 text-xl font-bold border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 m-5 text-white"
/>
 <button  className='h-15 w-40 border-2 border-solid border-white text-2xl bg-white text-black font-bold rounded-2xl m-5'>Contact me </button>
</div>
</div>
    </div>
    </>
  );
}





 export default Contact;
