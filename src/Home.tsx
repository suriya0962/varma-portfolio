import Aboutme from "./Aboutme"
import Contactme from "./Contactme"
import Myeducation from "./Myeducation"
import Myskills from "./Myskills"
import Video from "./assets/video.mp4"


const Home = () => {
  return (
<>
    <div >
      <video
      autoPlay={true}
      loop
      muted
      className="relative  bg-cover w-[100%]"
      src={Video}
      ></video> 
    <div className="absolute  md:top-[80px] top-[20px]  h-auto  w-[100%]">
       <Aboutme/>
       <div className="bg-[#161616] ">
       <div> <h1 className="text-white bg-[#161616] font-bold md:text-[40px] flex justify-center underline  text-[15px]">My Education</h1><Myeducation/></div> 
       <div> <h1 className="text-white bg-[#161616]  font-bold md:text-[40px] text-[15px] flex justify-center  underline ">My Skills</h1><Myskills/></div>
       <div> <h1 className="text-white bg-[#161616]  font-bold md:text-[40px] text-[15px] mt-[40px] flex justify-center underline">Contact me</h1><Contactme/></div>  
       </div>
       </div>
        
    </div>

    </>
  )
}

export default Home