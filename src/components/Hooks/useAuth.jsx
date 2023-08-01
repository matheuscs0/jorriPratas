import { useContext } from "react";
import { AuthContext } from "../Context/AuthCOntext";

export default function useAuth(){
  return useContext(AuthContext)
}