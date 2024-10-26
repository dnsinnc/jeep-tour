import { createBrowserRouter, Navigate } from "react-router-dom";
import Authorization from "../../pages/Authorization/Authorization";
import RecoveryPass from "../../pages/RecoveryPass/RecoveryPass";
import Registration from "../../pages/Registration/Registration";
import ChangePass from "../../pages/ChangePass/СhangePass";
import UserProfile from "../../pages/UserProfile/UserProfile";
import Landing from "../../pages/Landing/Landing";
import GuideForm from "../../pages/GuideForm/GuideForm";



export const notAuthRoutes = createBrowserRouter([
   {
      path: '/jeep-tour/login',
      element: <Authorization />,
      errorElement: <Navigate to={'/'} />
   },
   {
      path: '/jeep-tour/registration',
      element: < Registration />,
      errorElement: <Navigate to={'/'} />


   },

   {
      path: '/jeep-tour/forgot-password',
      element: < RecoveryPass />,
      errorElement: <Navigate to={'/'} />


   },
   {
      path: '/jeep-tour',
      element: < Landing />,
      errorElement: <Navigate to={'/'} />


   },
   
])

export const authRoutes = createBrowserRouter([
   {
      path: '/jeep-tour/change-password',
      element: < ChangePass />,
      errorElement: <Navigate to={'/login'} />


   },
   {
      path: '/jeep-tour/my-profile',
      element: < UserProfile />,
      errorElement: <Navigate to={'/my-profile'} />
   },
   {
      path: '/jeep-tour',
      element: < Landing />,
      errorElement: <Navigate to={'/'} />
   },
   {
      path: '/jeep-tour/guide-form',
      element: < GuideForm />,
      errorElement: <Navigate to={'/'} />
   },

])