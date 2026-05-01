import Input from '../../components/Input'
import Button from '../../components/Button'
import { useRef } from 'react';
import axios from 'axios';
import { backend_Url } from '../config';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const navigate=useNavigate();

  const signup = async () => {
    // Handle signup logic here
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;
    await axios.post(`${backend_Url}/api/v1/signup`,{
      
        username,
        password
      
    }).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
    navigate('/signin');
  }


  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-500 mt-2">
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" />

          <div className="pt-3 flex justify-center">
            <Button 
              text="Sign Up" 
              variant="primary"
            
              onClick={signup}
            />
          </div>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline" onClick={() => {
            navigate('/signin');
          }}>
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default Signup