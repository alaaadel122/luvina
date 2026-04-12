import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Login from './features/auth/components/login'
import AuthLayout from './features/auth/_components/AuthLayout'
import Signup from './features/auth/components/Signup'
import ForgetPassword from './features/auth/components/ForgetPassword'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './features/home/Home'

const queryClient = new QueryClient()

function App() {
  const routes = createBrowserRouter([
    // {
    //   path: '/', element: <AuthLayout></AuthLayout>, children: [
    //     { path: '/', element: <Login></Login> },
    //     { path: '/signup', element: <Signup></Signup> },
    //     { path: '/forgetPassword', element: <ForgetPassword /> }
    //   ],
      
    // },
    {
      path:'/',element:<Home/>
    }

  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  )
}

export default App
