import React from 'react'
import "./styles.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='mt-24 flex justify-between items-center px-10 py-8 bg-[#F5FCFF] md:flex-row flex-col'>
      <h1 className=' text-2xl md:text-5xl font-bold text-[#5E3BEE]'>Socials</h1>
      <div className='flex justify-between items-center gap-5'>
        <div className='icons-div md:p-[1rem] md:border-2 border-[#5E3BEE] cursor-pointer'>
          <LinkedIn/>
        </div>
        <div className='icons-div'>
          <FacebookIcon/>
        </div>
        <div className='icons-div'>
          <GitHubIcon/>
        </div>
        <div className='icons-div'>
          <InstagramIcon/>
        </div>
        <div className='icons-div'>
          <EmailIcon/>
        </div>
      </div>
    </div>
  )
}

export default Footer