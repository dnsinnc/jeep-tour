
import { RouterProvider } from 'react-router-dom'
import { authRoutes, notAuthRoutes } from './app/routes/routes'
import { useAppSelector } from './hooks/redux'
import './index.css';



function App() {
   const authUser = useAppSelector((state) => state.user.authUser)

   if (authUser) {
      return (
         <>
            <RouterProvider router={authRoutes} />
         </>
      )
   } else {
      return (
         <>
            <RouterProvider router={notAuthRoutes} />
         </>
      )
   }



}

export default App
