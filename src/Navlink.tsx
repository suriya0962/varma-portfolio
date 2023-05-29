
import {Link} from 'react-router-dom'
// import Aboutme from './Aboutme'


const Port = () => {
  return (
    <div>
      <div className='flex justify-between   bg-black font-semibold h-auto w-[100%]'>
      <div className='flex mt-2'>
        <img src='https://www.sportingvote.com/wp-content/uploads/2018/06/cropped-sv_logo_large-1.png' className='md:h-[40px] h-[10px] w-[10px] md:w-[40px] ml-1 mb-2'/>
        <h1 className='ml-1 md:text-[20px] text-[8px]  text-white md:mt-2'>Surya Sagiraju</h1>
        </div>
        <div className='flex md:mr-[10px] mr-1 md:ml-4 ml-5  md:gap-[20px] gap-[9px] md:text-[20px] text-[8px] mt-2 md:mt-4'>
        <Link to='/'> <h2 className='text-white hover:underline hover:brightness-50 '>Home</h2></Link>

          <Link to='/aboutme'> <h2 className='text-white hover:underline hover:brightness-50 '>About me</h2></Link>
          <Link to='/myeducation'> <h2 className='text-white hover:underline hover:brightness-50  '>My education</h2></Link>
          <Link to='/myskills'>  <h2 className='text-white hover:underline hover:brightness-50 '>My skills</h2></Link>
          <Link to='/contactme'> <h2 className='text-white hover:underline hover:brightness-50 '>Contact me</h2></Link>
       </div>
    </div>
   
    </div>
  )
}

export default Port