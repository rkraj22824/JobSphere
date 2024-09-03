import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {lazy,Suspense} from "react"
import { Toaster } from 'react-hot-toast';
const Login =lazy(()=> import('./components/auth/Login'));
const Signup =lazy(()=> import('./components/auth/Signup'));
const Home =lazy(()=> import('./components/Home'));
const Jobs =lazy(()=> import('./components/Jobs'));
const Browse =lazy(()=> import('./components/Browse'));
const Profile =lazy(()=> import('./components/Profile'));
const Companies =lazy(()=> import('./components/admin/Companies'));
const JobDescription =lazy(()=> import('./components/JobDescription'));
const CompanyCreate =lazy(()=> import('./components/admin/CompanyCreate'));
const CompanySetup =lazy(()=> import('./components/admin/CompanySetup'));
const PostJob =lazy(()=> import('./components/admin/PostJob'));
const AdminJobs =lazy(()=> import('./components/admin/AdminJobs'));
const Applicants =lazy(()=> import('./components/admin/Applicants'));
const ProtectedRoute =lazy(()=> import('./components/admin/ProtectedRoute'));
import { Loader2 } from 'lucide-react';
const Loader = ()=>{
  return  <div className='w-full h-svh flex flex-row justify-center items-center
  '>
    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
  </div>
  
}



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<Loader/>}> <Home/> </Suspense>
  },
  {
    path: '/login',
    element: <Suspense fallback={<Loader/>}> <Login/> </Suspense>
  },
  {
    path: '/signup',
    element: <Suspense fallback={<Loader/>}> <Signup/> </Suspense>
  },
  {
    path: "/jobs",
    element: <Suspense fallback={<Loader/>}> <Jobs/> </Suspense>
  },
  {
    path: "/description/:id",
    element: <Suspense fallback={<Loader/>}> <JobDescription/> </Suspense>
  },
  {
    path: "/browse",
    element: <Suspense fallback={<Loader/>}> <Browse/> </Suspense>
  },
  {
    path: "/viewprofile",
    element: <Suspense fallback={<Loader/>}> <Profile/> </Suspense>
  },
  // admin ke liye yha se start hoga
  {
    path:"/admin/companies",
    
  element:<Suspense fallback={<Loader/>}> <ProtectedRoute><Companies/></ProtectedRoute> </Suspense>
   
  },
  {
    path:"/admin/companies/create",
    element: <Suspense fallback={<Loader/>}> <ProtectedRoute><CompanyCreate/></ProtectedRoute> </Suspense>
  },
  {
    path:"/admin/companies/:id",
    element:<Suspense fallback={<Loader/>}> <ProtectedRoute><CompanySetup/></ProtectedRoute> </Suspense>
  },
  {
    path:"/admin/jobs",
    element:<Suspense fallback={<Loader/>}> <ProtectedRoute><AdminJobs/></ProtectedRoute> </Suspense>
  },
  {
    path:"/admin/jobs/create",
    element:<Suspense fallback={<Loader/>}> <ProtectedRoute><PostJob/></ProtectedRoute> </Suspense>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Suspense fallback={<Loader/>}> <ProtectedRoute><Applicants/></ProtectedRoute> </Suspense>
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
      <Toaster />
    </div>
  )
}

export default App
