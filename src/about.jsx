import './App.css';
import './public.css'
import { Link } from 'react-router-dom';
function About() {
  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center sm:h-full lg:h-full mt-30'>
        <div className='w-[90%] md:w-[80%] lg:w-[60%] flex flex-col justify-center items-center'>
 <h1 className='text-3xl lg:text-4xl  font-bold text-blue-500 tracking-tight  '> ---About Me---</h1>
         <h2 className='text-2xl lg:text-3xl  font-bold  mt-5 ' > Suraj Lakade </h2>
         <p  className='text-base lg:text-xl  mt-7'>"Hi, I am Suraj Lakade, originally from Nanded, Maharashtra. My name signifies spreading positive energy, and I carry this mindset into my work by believing that every great project starts with a fresh and focused mind. I come from a supportive family of four members, including myself. My academic journey began with my 11th and 12th grade at Raja Bhagrath Junior College, Himayatnagar, which I completed in 2022. Currently, I am pursuing my B-Tech degree in Computer Science at GH Raisoni College of Engineering, Nagpur.

During my studies, I have developed strong technical skills in programming languages like C, C++, and JavaScript, along with a solid understanding of database management and web development. I am a natural problem-solver and critical thinker who enjoys the challenge of building real-world applications. This passion led me to create several major projects, including an E-commerce website, an Airbnb clone, and a Spotify clone.

I am a team player who values leadership and adaptability, which helps me work effectively in different environments. My short-term goal is to begin my professional career with a company where I can contribute my skills and continue learning every day. In the long term, I aim to become a highly skilled software engineer who solves meaningful problems through technology."</p>
     <button  className='h-15 w-40 border-2 border-solid border-white text-2xl   bg-white text-black font-bold rounded-2xl mt-7'><Link to="/Contact">Contact me </Link> </button>
    </div>
        </div>
        
    </>
  );
}





 export default About;
