import Input from '../../components/Input'
import Button from '../../components/Button'
import { backend_Url } from '../config';
import axios from 'axios';
import{useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {

  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);

  const navigate=useNavigate();

  const signin = async () => {
    // Handle signin logic here
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value;
    
      if(!username || !password){
        alert("Please enter username and password");
        return;
      }
    try{
      const response=await axios.post(`${backend_Url}/api/v1/signin`,{
        username,
        password
    })
      const jwt=response.data.token;
      localStorage.setItem('token',jwt);
      navigate('/dashboard');
    }
    catch(error){
      toast.error("Invalid username or password");
    }

    //redirect
    
  }


  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 mt-2">
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          <Input placeholder="Username" ref={usernameRef} />
          <Input placeholder="Password" ref={passwordRef} />

          <div className="pt-3 flex justify-center">
            <Button 
              text="Sign In" 
              variant="primary"
              onClick={signin}
            />
          </div>
        </div>
        <Toaster />
        

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline" onClick={() => {
            navigate('/signup');
          }}>
            Sign Up
          </span>
        </p>

      </div>
    </div>
  )
}

export default Signin