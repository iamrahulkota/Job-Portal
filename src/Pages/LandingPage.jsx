import React from 'react'
import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


function LandingPage() {

  const navigator = useNavigate();

  const companies = [
  {
    "name": "amazon",
    "path": "/companies/amazon.svg",
    "id": 1
  },
  {
    "name": "atlassian",
    "path": "/companies/atlassian.svg",
    "id": 2
  },
  {
    "name": "google",
    "path": "/companies/google.webp",
    "id": 3
  },
  {
    "name": "ibm",
    "path": "/companies/ibm.svg",
    "id": 4
  },
  {
    "name": "meta",
    "path": "/companies/meta.svg",
    "id": 5
  },
  {
    "name": "microsoft",
    "path": "/companies/microsoft.webp",
    "id": 6
  },
  {
    "name": "netflix",
    "path": "/companies/netflix.png",
    "id": 7
  },
  {
    "name": "uber",
    "path": "/companies/uber.svg",
    "id": 8
  }
];

const faqs = [
  {
    "id": 1,
    "question": "What is Hirrd?",
    "answer": "Hirrd is a Job Portal Application allows companies to post job listings and users to search and apply for jobs. It provides features for both job seekers and employers, with user-friendly interfaces and secure authentication."
  },
  {
    "id": 2,
    "question": "How do I post a job?",
    "answer": "As an employer, you can post a job by navigating to the 'Post Job' section after logging in. Fill in the job details and submit the form to create a new job listing."
  },
  {
    "id": 3,
    "question": "How can I search for jobs?",
    "answer": "Job seekers can search for jobs by keywords, location, category, and other filters using the search bar on the homepage or the dedicated job search page."
  },
  {
    "id": 4,
    "question": "How do I apply for a job?",
    "answer": "To apply for a job, click on the job listing and follow the application instructions provided. You may need to upload your resume and provide additional information."
  },
  {
    "id": 5,
    "question": "Can I save jobs to apply later?",
    "answer": "Yes, you can save job listings by clicking the 'Save Job' button on the job listing. Saved jobs can be accessed from your profile under the 'Saved Jobs' section."
  },
  {
    "id": 6,
    "question": "How do I track my job applications?",
    "answer": "Job seekers can track the status of their applications from the 'Applications' section in their profile. This section provides updates on the progress of each application."
  }
]

// console.log(companies)

  function handleFindJobs() {
    // console.log("handleFindJobs")
    navigator('/jobs')
  }

  function handlePostJob() {
    // console.log("handlePostJob")
    navigator('/postjob')
  }


  return (
    // <div className='w-100 flex h-screen'>
    //   <div className='w-3/6 flex flex-wrap'>
    //         <h1 className='text-white text-5xl'>Hello Job Portal Web site </h1>
    //   </div>
    //   <div className='w-3/6 h-full relative flex flex-col'>
    //     <Spline scene="https://prod.spline.design/iN8rWJbuPje2G1Mc/scene.splinecode" /> 
    //     <div className='absolute w-40 bottom-5 left-100 right-5 h-10 bg-[#020817]' /> 
    //   </div>
    // </div>
    <div className='w-100 min-h-screen'>

        <div className='mx-auto flex flex-col justify-center items-center text-center py-24 md:py-36 px-10 md:px-48'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>Your Next Tech Adventure <br />  
              <span className='font-bold '> Starts Here</span>
            </h1>
            <p className='font-light text-xs md:text-base my-6 md:my-10'>Join a global community of innovators and land your next role with leading tech companies.</p>
            <div className='flex mx-auto gap-6'>
                <Button variant="success" onClick={handleFindJobs} size="xl">Find Jobs</Button>
                <Button variant="outline" onClick={handlePostJob} size="xl">Post Job</Button>
            </div>
            <div className='mt-10 md:mt-36'>
            <Carousel
                 plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-full py-10"
              >
                <CarouselContent className="flex gap-5 md:gap-20 items-center">
                  {companies.map((item) => (
                    <CarouselItem key={item?.id} className="basis-1/3 lg:basis-1/6">
                      <img src={item?.path} alt={item?.name} className='h-9 md:h-14 object-contain'/>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center gap-5 mb-14 md:mb-24'>
          <Card className="w-100 md:w-3/6">
            <CardHeader>
              <CardTitle className="font-bold">For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Search and apply for jobs, track applications, and more.
            </CardContent>
          </Card>
          <Card className="w-100 md:w-3/6">
            <CardHeader>
              <CardTitle className="font-bold">For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post jobs, manage applications, and find the best candidates.
            </CardContent>
          </Card>
        </div>

        <div className='mx-auto mb-14 md:mb-24'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 font-semibold'>Frequently asked questions</h1>
          <Accordion type="single" collapsible>
              {faqs?.map((item) => (
                  <AccordionItem value={item?.id}>
                    <AccordionTrigger>{item?.question}</AccordionTrigger>
                    <AccordionContent>{item?.answer}</AccordionContent>
                  </AccordionItem>
              ))}
          </Accordion>
        </div>

    </div>
  )
}

export default LandingPage

