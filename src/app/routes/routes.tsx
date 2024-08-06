import { createBrowserRouter,  Navigate } from "react-router-dom";
import Authorization from "../../pages/Authorization/Authorization";
import RecoveryPass from "../../pages/RecoveryPass/RecoveryPass";
import Registration from "../../pages/Registration/Registration";
import ChangePass from "../../pages/ChangePass/СhangePass";
import UserProfile from "../../pages/UserProfile/UserProfile";



export const notAuthRoutes = createBrowserRouter([
   {
      path: '/',
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
])

export const authRoutes = createBrowserRouter([
   {
      path: '/change-password',
      element: < ChangePass />,
      errorElement: <Navigate to={'/'} />


   },
   {
      path: '/my-profile',
      element: < UserProfile />,
      errorElement: <Navigate to={'/'} />
   }

])