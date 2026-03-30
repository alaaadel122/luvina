import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Login from './features/auth/components/login'
import AuthLayout from './features/auth/_components/AuthLayout'
import Signup from './features/auth/components/Signup'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <AuthLayout></AuthLayout>, children: [
        { path: '/', element: <Login></Login> },
        { path: '/signup', element: <Signup></Signup> }
      ]
    },

  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App
