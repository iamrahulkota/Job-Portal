import { ThemeProvider } from "@/components/theme-provider"


import { Toaster } from "@/components/ui/sonner"


import './App.css'
import { Route, Routes } from "react-router-dom"
import Homelayout from "./Layout/Homelayout"
import OnBoardingpage from "./Pages/OnBoardingpage"
import JobListingPage from "./Pages/JobListingPage"
import JobPage from "./Pages/JobPage"
import PostJobPage from "./Pages/PostJobPage"
import SavedJobsPage from "./Pages/SavedJobsPage"
import MyJobs from "./Pages/MyJobs"
import LandingPage from "./Pages/LandingPage"

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
          <Route element={<Homelayout />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<OnBoardingpage />} />
            <Route path="/jobs" element={<JobListingPage />} />
            <Route path="/job/:id" element={<JobPage />} />
            <Route path="/postjob" element={<PostJobPage />} />
            <Route path="/savedjobs" element={<SavedJobsPage />} />
            <Route path="/myjobs" element={<MyJobs />} />
          </Route>
      </Routes>
      <Toaster 
        position="top-right" 
        expand={false} 
        toastOptions={{
          // theme: "dark",
          className: 'my-toast',
        }}
      />
    </ThemeProvider>
  )
}

export default App
