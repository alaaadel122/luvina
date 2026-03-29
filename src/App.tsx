import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './components/auth/layout'

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
