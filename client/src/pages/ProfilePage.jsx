import { Navigate, useParams } from "react-router-dom";
import PlacesPage from "./PlacesPage.jsx";
import AccountNav from "../components/AccountNav.jsx";
import useAuth from "../hooks/useAuth.js";

export default function ProfilePage() {
  
    const { ready, user, redirect, logout } = useAuth();

    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage ='profile';
    }

    if (!ready) {
        return <div>Loading...</div>;
    }

    if ((ready && !user && !redirect) || redirect) {
        return <Navigate to={redirect || "/login"} />;
    }

    return (
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm m-2">Logout</button>
                </div>
            )}
            {subpage === 'places' && <PlacesPage />}
        </div>
    )
}