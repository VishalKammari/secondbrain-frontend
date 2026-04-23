import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Signup = () => {
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
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />

          <div className="pt-3 flex justify-center">
            <Button 
              text="Sign Up" 
              variant="primary"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-400">
            OR
          </span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Google Signup Button (Optional) */}
        <button className="w-full border rounded-lg py-3 font-medium hover:bg-gray-50 transition">
          Continue with Google
        </button>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  )
}

export default Signup