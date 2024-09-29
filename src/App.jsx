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
import ProtectedRoute from "./ProtectedRoute"

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
          <Route element={<Homelayout />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<ProtectedRoute><OnBoardingpage /></ProtectedRoute>} />
            <Route path="/jobs" element={<ProtectedRoute><JobListingPage /></ProtectedRoute>} />
            <Route path="/job/:id" element={<ProtectedRoute><JobPage /></ProtectedRoute>} />
            <Route path="/postjob" element={<ProtectedRoute><PostJobPage /></ProtectedRoute>} />
            <Route path="/savedjobs" element={<ProtectedRoute><SavedJobsPage /></ProtectedRoute>} />
            <Route path="/myjobs" element={<ProtectedRoute><MyJobs /></ProtectedRoute>} />
          </Route>
      </Routes>
      <Toaster 
        position="bottom-right" 
        expand={false} 
        toastOptions={{
          theme: "dark",
          className: 'my-toast',
        }}
      />
    </ThemeProvider>
  )
}

export default App
