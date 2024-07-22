import { createBrowserRouter } from "react-router-dom";
import Authorization from "../../pages/Authorization/Authorization";
import RecoveryPass from "../../pages/RecoveryPass/RecoveryPass";
import Registration from "../../pages/Registration/Registration";
import ChangePass from "../../pages/ChangePass/СhangePass";




export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Authorization/>,
   },

   {
      path: '/registration',
      element: < Registration/>,
   },
   {
      path: '/forgotpass',
      element: < RecoveryPass/>,
   },
   {
      path: '/changepass',
      element: < ChangePass />,
   },

])