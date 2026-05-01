import Button from "../../components/Button";
import Plusicon from "../../components/icons/Plusicon";
import Shareicon from "../../components/icons/Shareicon";
import Card from "../../components/Card";
import CreateModel from "../../components/CreateModel";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import useContent from "../hooks/useContent";


function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);

  const { contents, refresh } = useContent();

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="w-full p-4 md:ml-64">
        
        <CreateModel
          open={modelOpen}
          onClose={() => setModelOpen(false)}
          refresh={refresh}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Button
            variant="primary"
            text="Add Content"
            StartIcon={<Plusicon />}
            onClick={() => setModelOpen(true)}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            StartIcon={<Shareicon />}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {contents.map(({ type, link, title, _id }) => (
              <Card key={_id} type={type} link={link} title={title} />
            ))}
          </div>
        </div>

          </div>
        </div>
  );
}

export default Dashboard;












// import Button from '../../components/Button'
// import Plusicon from '../../components/icons/Plusicon'
// import Shareicon from '../../components/icons/Shareicon'
// import Card from '../../components/Card'
// import CreateModel from '../../components/CreateModel'
// import { useState } from 'react'
// import Sidebar from '../../components/Sidebar'
// import useContent from '../hooks/useContent'



// function Dashboard() {
//   const [modelOpen, setModelOpen] = useState(false);

//   const contents=useContent();

//   return (
//     <div className="flex min-h-screen">
      
//       {/* Sidebar */}
//       <div className="hidden md:block">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="w-full p-4 md:ml-64">
        
//         <CreateModel open={modelOpen} onClose={() => setModelOpen(false)} />

//         {/* Top Buttons */}
//         <div className="flex flex-col sm:flex-row gap-3 mb-4">
//           <Button
//             variant="primary"
//             text="Add Content"
//             StartIcon={<Plusicon />}
//             onClick={() => setModelOpen(true)}
//           />
//           <Button
//             variant="secondary"
//             text="Share Brain"
//             StartIcon={<Shareicon />}
//           />
//         </div>

//         {/* Cards */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
//           {JSON.stringify(contents)}

//           {
//           contents?.map(({type,link,title,_id})=>{
//             return <Card type={type} link={link} title={title} key={_id} />
//           })}
//         </div>

//       </div>
//     </div>
//   );
// }


// export default Dashboard
















// function Dashboard() {
//   const[modelOpen, setModelOpen] = useState(false);
//   return (
//     <div className='flex min-h-screen overflow-x-hidden'>
//   <Sidebar />

//   <div className='p-4 ml-64 w-full'>
//     <CreateModel open={modelOpen} onClose={() => setModelOpen(false)} />

//     <div className='flex gap-2 m-3'>
//       <Button variant="primary" text="Add Content" StartIcon={<Plusicon />} onClick={() => setModelOpen(true)} />
//       <Button variant="secondary" text="Share Brain" StartIcon={<Shareicon />} />
//     </div>

//     <div className='columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2 mt-4'>
//         <Card type='youtube' link='https://youtu.be/jgyShFzdB_Q?si=ZxEQGLBG7WBhS6fw' title='my first video' />
//         <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
//         <Card type='youtube' link='https://youtu.be/0gZuzKK_img?si=Igb8ce78Cubpa-e4' title='my first video' />
//         <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
//         <Card type='youtube' link='https://youtu.be/LhpZJwUboeI?si=hwTg5wVFL1IJ8Qxv' title='my first video' />
//         <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
//         <Card type='youtube' link='https://youtu.be/jgyShFzdB_Q?si=ZxEQGLBG7WBhS6fw' title='my first video' />
//         <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
//         <Card type='youtube' link='https://youtu.be/0gZuzKK_img?si=Igb8ce78Cubpa-e4' title='my first video' />
//         <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
//         <Card type='youtube' link='https://youtu.be/LhpZJwUboeI?si=hwTg5wVFL1IJ8Qxv' title='my first video' />
//         <Card type='twitter' link='https://x.com/mufaddal_vohra/status/2041202853243732427?s=20' title='Elon Musk Tweet' />
      
//     </div>
//   </div>
// </div>
//   )
// }

// export default Dashboard