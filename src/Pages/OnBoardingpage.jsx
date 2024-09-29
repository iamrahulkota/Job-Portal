import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "sonner";

function OnBoardingpage() {

  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  console.log(user, "qwertyuiop");


  const handleRoleSelection = async (role) => {
      await user 
          .update ({unsafeMetadata : { role }})
          .then (()=>{
              console.log(`Role updated to: ${role}`);
              navigate(role === "recruiter" ? '/postjob' : '/jobs');
          })
          .catch((err) => {
            console.error("Error updating role:", err);
            toast.error("Error updating role:", err);
          });
  }

  useEffect(()=>{
    if (user?.unsafeMetadata?.role) {
      navigate(user?.unsafeMetadata?.role === "recruiter" ? '/postjob' : '/jobs');
    }
  },[user])


  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7"/>
  }

  return (
    <div className="flex flex-col items-center mt-20 md:mt-40 min-h-screen">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a...
      </h2>
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-4 w-full md:px-40">
        <Button
          variant="success"
          className="h-36 w-100 md:w-2/6 text-2xl"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant="outline"
          className="h-36 w-100 md:w-2/6 text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  )
}

export default OnBoardingpage