import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/scottngocbui' target='_blank'><SiLinkedin /></a>
        <a href='https://github.com/scottngocbui' target='_blank'><SiGithub /></a>
        <a href='mailto:scottngocbui@gmail.com' target='_blank'><SiGmail /></a>
    </div>
  )
}

export default HeaderSocials