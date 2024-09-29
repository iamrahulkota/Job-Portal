import React from 'react'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Navigate, useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();


  function handleLogin() {
      console.log("Login Button Clicked")
      toast.success("Login Button Clicked")
  }

  return (
    <div className='w-100'>

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
      </div>
      
    </div>
  )
}

export default Footer