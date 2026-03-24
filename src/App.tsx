import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Login from './components/auth/Login/ui/login'
import Signup from './components/auth/SignUp/ui/Signup'
import AuthLayout from './components/auth/AuthLayout'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <AuthLayout></AuthLayout>, children: [
        { path: '/login', element: <Login></Login> },
        { path: '/signup', element: <Signup></Signup> }
      ]
    },

  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
