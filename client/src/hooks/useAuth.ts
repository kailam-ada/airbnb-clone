import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

export default function useAuth() {
    const [redirect,setRedirect] = useState<string | null>(null);
    const {ready,user,setUser} = useContext(UserContext);

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
}

  return { ready, user, redirect, logout };
}
