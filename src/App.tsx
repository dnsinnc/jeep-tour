
import { RouterProvider } from 'react-router-dom'
import { authRoutes, notAuthRoutes } from './app/routes/routes'
import { useAppSelector } from './hooks/redux'
import './index.css';



function App() {
   const authUser = useAppSelector((state) => state.user.authUser)
   console.log(authUser)


   if (Object.keys(authUser).length === 0) {
      return (
         <>
            <RouterProvider router={notAuthRoutes} />
         </>
      )
   } else {
      return (
         <>
            <RouterProvider router={authRoutes} />
         </>
      )
   }



}

export default App
