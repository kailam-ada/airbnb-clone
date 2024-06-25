import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "./typescript/UserType";

  type UserContextValue = {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
    ready: boolean;
  }

  export const UserContext = createContext<UserContextValue>({
    user: null,
    setUser: () => {},
    ready: false,
  });

export function UserContextProvider({children}: { children: React.ReactNode }) {
    const [user,setUser] = useState<UserType | null>(null);
    const [ready,setReady] = useState(false);
    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data);
                setReady(true);
            });
        }
    }, [user]);
    return (
        <UserContext.Provider value={{user,setUser,ready}}>
            {children}
        </UserContext.Provider>
    );
}