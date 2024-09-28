import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

import './App.css'

function App() {


  return (
    <>
      <Button 
        variant="outline"
        onClick={()=>{
          toast.success("Event has been created")
        }}
      >
        Log in
      </Button>

      <Toaster 
        position="top-right" 
        expand={false} 
        toastOptions={{
          invert: "true",
          // theme: "dark",
          className: 'my-toast',
        }}
      />
    </>
  )
}

export default App
