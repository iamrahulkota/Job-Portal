import React from 'react'
import Spline from '@splinetool/react-spline';
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Navigate, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Header() {

    const navigate = useNavigate();


    function handleLogin() {
        console.log("Login Button Clicked")
        toast.success("Login Button Clicked")
    }

  return (
    <div className='w-100'>
        {/* <Button 
        variant="outline"
            onClick={()=>{
            toast.success("Event has been created")
            }}
        >
        Log in
      </Button> */}
      {/* <div className='w-3/6 flex flex-wrap'>
            <h1 className='text-white text-5xl'>Hello Job Portal Web site </h1>
      </div>
      <div className='w-3/6 h-full relative flex flex-col'>
        <Spline scene="https://prod.spline.design/iN8rWJbuPje2G1Mc/scene.splinecode" /> 
        <div className='absolute w-40 bottom-5 left-100 right-5 h-10 bg-[#020817]' /> 
      </div> */}

      <div className='flex justify-between py-5'>
            {/* <h1 className='text-2xl'>Work Wire</h1> */}
            <Button 
                variant="link" 
                onClick={() => navigate('/')}
                className="text-xl font-normal"
            >
                Work Wire
            </Button>
            <Button 
                variant="outline" 
                onClick={handleLogin}
            >
                Log in
            </Button>
            {/* <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn> */}
      </div>
    </div>
  )
}

export default Header