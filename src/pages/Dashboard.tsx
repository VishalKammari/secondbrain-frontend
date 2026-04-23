import Button from '../../components/Button'
import Plusicon from '../../components/icons/Plusicon'
import Shareicon from '../../components/icons/Shareicon'
import Card from '../../components/Card'
import CreateModel from '../../components/CreateModel'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'

function Dashboard() {
  const[modelOpen, setModelOpen] = useState(false);
  return (
    <div className='flex min-h-screen overflow-x-hidden'>
  <Sidebar />

  <div className='p-4 ml-64 w-full'>
    <CreateModel open={modelOpen} onClose={() => setModelOpen(false)} />

    <div className='flex gap-2 m-3'>
      <Button variant="primary" text="Add Content" StartIcon={<Plusicon />} onClick={() => setModelOpen(true)} />
      <Button variant="secondary" text="Share Brain" StartIcon={<Shareicon />} />
    </div>

    <div className='columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2 mt-4'>
        <Card type='youtube' link='https://youtu.be/jgyShFzdB_Q?si=ZxEQGLBG7WBhS6fw' title='my first video' />
        <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
        <Card type='youtube' link='https://youtu.be/0gZuzKK_img?si=Igb8ce78Cubpa-e4' title='my first video' />
        <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
        <Card type='youtube' link='https://youtu.be/LhpZJwUboeI?si=hwTg5wVFL1IJ8Qxv' title='my first video' />
        <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
        <Card type='youtube' link='https://youtu.be/jgyShFzdB_Q?si=ZxEQGLBG7WBhS6fw' title='my first video' />
        <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
        <Card type='youtube' link='https://youtu.be/0gZuzKK_img?si=Igb8ce78Cubpa-e4' title='my first video' />
        <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
        <Card type='youtube' link='https://youtu.be/LhpZJwUboeI?si=hwTg5wVFL1IJ8Qxv' title='my first video' />
        <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
      
    </div>
  </div>
</div>
  )
}

export default Dashboard

