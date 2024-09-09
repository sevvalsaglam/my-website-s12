import React from 'react'
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { languageData } from '../data';




const Header = () => {
    
  return (
    <>
    <button></button>
    <button></button>
    <div className='flex'>
        <div className=' text-4xl ps-2.5 font-sans m-2 p-3'>
            <p>{languageData.en.hero.greeting}</p>
            <p>{languageData.en.hero.intro}</p>

            <div className='text-5xl flex justify-start'>
            <RiLinkedinFill /><AiOutlineGithub/>
            </div>
        </div>
            <img src='https://media.licdn.com/dms/image/v2/D4D03AQGMLcitYEY-3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693150982453?e=1731542400&v=beta&t=durwbKz5KXmmzID6jcaRU7sve0hzm8OO-1G0jPNnCnM' className='w-60 h-60 '/>
        </div>
        <p>Currently Freelancing for UX, UI, & Web Design Project.Invite me to join your team - sevvallsaglam@gmail.com</p>
    </>
  )
}

export default Header;