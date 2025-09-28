import Image from 'next/image'
import React from 'react'
import ProfilePic from '../../../public/ProfilePic.svg'

const profileLayout = ({children}) => {
  return (
    <div>
      <br></br>
      PROFILE PAGE.
        <div className='flex justify-center'>
        <Image src={ProfilePic}
              alt='profilepic'
              style={{width:'20%'}}/>
        </div> 
      {children}
    </div>
  )
}

export default profileLayout