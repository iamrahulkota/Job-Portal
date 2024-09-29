import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';
import { Briefcase, BriefcaseBusiness, Heart, PenBox } from 'lucide-react';

function Header() {

    const navigate = useNavigate();
    const [search, setSearch] = useSearchParams();

    const [showSignIn, setShowSignIn] = useState(false);


    function handleLogin() {
        // console.log("Login Button Clicked")
        // toast.success("Login Button Clicked")
        setShowSignIn(true);
    }

    function handlePostJob() {
        // console.log("PostJob Button Clicked")
        // toast.success("PostJob Button Clicked")
        navigate('/postjob')
    }

    useEffect(()=>{
        if(search.get('sign-in')) {
            setShowSignIn(true)
        }
    },[search])

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget)
        setShowSignIn(false)
        setSearch({})
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
            
            <div className='flex gap-1 md:gap-4'>
                

                <SignedOut>
                    {/* When the user is SignedOut/NotLoginedIn, we are showing the Login Button */}
                    <Button 
                        variant="outline" 
                        onClick={handleLogin}
                    >
                        Log in
                    </Button>
                </SignedOut>
                <SignedIn>
                    <Button 
                        variant="ghost" 
                        onClick={handlePostJob}
                    >
                        <PenBox size={20} className='m-0 md:mr-2'/>
                        <span className='hidden md:block'>Post a Job</span>
                    </Button>
                    <UserButton appearance={{
                        elements : {
                            avatarBox: "w-10 h-10",
                        },
                    }}>
                        <UserButton.MenuItems>
                            <UserButton.Link 
                                label='My Jobs'
                                labelIcon={<BriefcaseBusiness size={15} />}
                                href='/myjobs'
                            />
                        </UserButton.MenuItems>
                        <UserButton.MenuItems>
                            <UserButton.Link 
                                label='Saved Jobs'
                                labelIcon={<Heart size={15} />}
                                href='/savedjobs'
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                </SignedIn>

            </div>
      </div>
      {showSignIn && (
        <div 
            className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'
            onClick={handleOverlayClick}
        >
            <SignIn
                signUpForceRedirectUrl='/onboarding'
                fallbackRedirectUrl='/onboarding'
            >
            </SignIn>
        </div>
      )}
    </div>
  )
}

export default Header