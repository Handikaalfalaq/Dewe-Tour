import { Outlet, Navigate } from 'react-router-dom';
import { DataContext } from "../page/dataContext";
import { useContext} from "react";

const PrivateRoute = ({element: Component, role, ...rest}) => {
    const {InputLogin, InputLoginAdmin} = useContext(DataContext);
    
    const User = InputLogin
    const Admin = InputLoginAdmin
   if (role === "admin" && Admin) {
        return <Outlet />;
      } else if (role === "user" && User) {
        return <Outlet />;
      } else {
        return <Navigate to="/" />;
      }
} 

export default PrivateRoute