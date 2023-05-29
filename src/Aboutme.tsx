
import arun from './assets/suryAV.jpeg'
// import Myeducation from './Myeducation'
// import Myskills from './Myskills'
// import Contactme from './Contactme'

const Aboutme = () => { 
  return (
    <>
    <div className='flex  md:h-[100vh] h-[100%] w-[100%]'>
    
      <div className='font-serif w-[100%] md:ml-[30px] ml-[10px] md:mt-[50px] mt-[30px]' data-aos='slide-right' data-aos-delay='1000'> 
      
      <div>
      <h1  className='  md:text-[50px] text-[20px]  text-white font-semibold '>Surya Sagiraju</h1>
      <h1 className=' text-white md:text-[20px] text-[8px] md:mt-3  '>Junior Front-end developer</h1></div>
      <p className=' text-white md:text-[20px] text-[8px] md:mt-3 '>Hi,i am Surya varma and i am from vizainagaram.<br />Now i am doing internship in  <a href="https://flyerssoft.com/" className=' text-violet-900 hover:underline'>Flyers soft </a> <br/>
      in front-end development. </p>
     <li className=' text-white md:text-[20px] text-[8px] md:mt-3 '>Determining the structure and design of web pages.</li>
     <li className=' text-white md:text-[20px] text-[8px] md:mt-3 '>Ensuring user experience determines design choices.</li>
     <li className=' text-white md:text-[20px] text-[8px] md:mt-3 '>Developing features to enhance the user experience.</li>
     <li className=' text-white md:text-[20px] text-[8px] md:mt-3 '>Striking a balance between functional and aesthetic design.</li>            
     </div>
     
      <div> </div>
      
      <img alt='surya' className=' md:h-[400px] h-[120px]  rounded-full md:mt-[60px] mt-[45px] md:mr-[100px] mr-[10px] ' data-aos="fade-left"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"  src={arun}/>
      </div>
      
      </>
  )
}

export default Aboutme