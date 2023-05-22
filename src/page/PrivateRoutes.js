import { Outlet, Navigate } from 'react-router-dom';
import { DataContext } from "../page/dataContext";
import { useContext} from "react";

const PrivateRoute = ({element: Component, role, ...rest}) => {
    const {InputLogin, InputLoginAdmin} = useContext(DataContext);
    let Visitor = true
    if (InputLogin === true ) {
      Visitor = false
    } else if (InputLoginAdmin === true ) {
      Visitor = false
    }

    const User = InputLogin
    const Admin = InputLoginAdmin
    
    if (role === "visitor" && Visitor) {
      return <Outlet/>;
    } else if (role === "admin" && Admin) {
        return <Outlet />;
      } else if (role === "user" && User) {
        return <Outlet />;
      } else {
        return <Navigate to="/" />;
      }
} 

export default PrivateRoute