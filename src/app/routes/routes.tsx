import { createBrowserRouter, Navigate } from "react-router-dom";
import Authorization from "../../pages/Authorization/Authorization";
import RecoveryPass from "../../pages/RecoveryPass/RecoveryPass";
import Registration from "../../pages/Registration/Registration";
import ChangePass from "../../pages/ChangePass/СhangePass";
import UserProfile from "../../pages/UserProfile/UserProfile";
import Landing from "../../pages/Landing/Landing";



export const notAuthRoutes = createBrowserRouter([
   {
      path: '/login',
      element: <Authorization />,
      errorElement: <Navigate to={'/'} />
   },
   {
      path: '/registration',
      element: < Registration />,
      errorElement: <Navigate to={'/'} />


   },

   {
      path: '/forgot-password',
      element: < RecoveryPass />,
      errorElement: <Navigate to={'/'} />


   },
   {
      path: '/',
      element: < Landing />,
      errorElement: <Navigate to={'/'} />


   },
   
])

export const authRoutes = createBrowserRouter([
   {
      path: '/change-password',
      element: < ChangePass />,
      errorElement: <Navigate to={'/login'} />


   },
   {
      path: '/my-profile',
      element: < UserProfile />,
      errorElement: <Navigate to={'/my-profile'} />
   },
   {
      path: '/',
      element: < Landing />,
      errorElement: <Navigate to={'/'} />


   },

])