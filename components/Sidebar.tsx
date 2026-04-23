import React from 'react'
import SidebarComponent from './SidebarComponent'
import Xicon from '../components/icons/Xicon'
import YoutubeIcon from '../components/icons/YoutubeIcon'

const Sidebar = () => {
  return (
    <div className='h-full bg-white border-r w-60 fixed left-0 top-0'>
      <div className='font-instrument text-4xl p-4 pl-6 font-weight-bold'>
        Brainly
      </div>
      <SidebarComponent text="Twitter" icon={<Xicon/>} />
      <SidebarComponent text="Youtube" icon={<YoutubeIcon/>} />

    </div>
  )
}

export default Sidebar