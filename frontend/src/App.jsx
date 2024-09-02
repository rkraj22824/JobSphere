import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
// import Login from './components/auth/Login'
const Login = React.lazy(()=> import('./components/auth/Login'));
const Signup = React.lazy(()=> import('./components/auth/Signup'));
const Home = React.lazy(()=> import('./components/Home'));
const Jobs = React.lazy(()=> import('./components/Jobs'));
const Browse = React.lazy(()=> import('./components/Browse'));
const Profile = React.lazy(()=> import('./components/Profile'));
const Companies = React.lazy(()=> import('./components/admin/Companies'));
const JobDescription = React.lazy(()=> import('./components/JobDescription'));
const CompanyCreate = React.lazy(()=> import('./components/admin/CompanyCreate'));
const CompanySetup = React.lazy(()=> import('./components/admin/CompanySetup'));
const PostJob = React.lazy(()=> import('./components/admin/PostJob'));
const AdminJobs = React.lazy(()=> import('./components/admin/AdminJobs'));
const Applicants = React.lazy(()=> import('./components/admin/Applicants'));
const ProtectedRoute = React.lazy(()=> import('./components/admin/ProtectedRoute'));



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/viewprofile",
    element: <Profile />
  },
  // admin ke liye yha se start hoga
  {
    path:"/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
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
