import {ReactElement, type JSX} from 'react'

const SidebarComponent = ({text,icon}):{
    text?:string,
    icon?:JSX.Element | ReactElement
} => {
  return (
    <div className='flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100'>
        <div>
            {icon}
        </div>
        <div className='font-medium'>
            {text}
        </div>
    </div>
  )
}

export default SidebarComponent