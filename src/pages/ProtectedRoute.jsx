import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuth"
import {useNavigate} from "react-router-dom";

function ProtectedRoute({children}) {
  const {isRegistered} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isRegistered) navigate("/");
  },[isRegistered, navigate]);


  return isRegistered ? children : null;
}

export default ProtectedRoute
