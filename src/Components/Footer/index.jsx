import React from 'react'
import "./styles.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='mt-24 flex justify-between items-center px-10 py-8 bg-[#F5FCFF]'>
      <h1 className='text-5xl font-bold text-[#5E3BEE]'>Socials</h1>
      <div className='flex justify-between items-center gap-5'>
        <div className='icons-div'>
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