import React from 'react'
import CrossIcon from './CrossIcon'
import Button from './Button'

export default function CreateModel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className=''>
      {open && (
        <div className='w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center items-center'>
          
          <div className='bg-white p-6 rounded-md w-80'>
            
            <div className='flex justify-end py-2'>
              <div onClick={onClose}>
               <CrossIcon />
              </div>
                
            </div>
            <div className='flex flex-col gap-4 mt-4'>
              <Input placeholder="Title" />
              <Input placeholder="Link" />
            </div>

            <div className='flex pt-4 justify-center'>
              <Button variant="primary" text="Submit" />
            </div>

          </div>

        </div>
      )}
    </div>
  )
}
function Input({
  onChange,
  placeholder
}: {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <input
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className='border border-gray-300 rounded-md px-4 py-2 w-full'
    />
  )
}