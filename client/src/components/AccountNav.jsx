import { Link, useLocation } from "react-router-dom";
import ProfileIcon from "./icons/ProfileIcon";
import BookingsIcon from "./icons/BookingsIcon";
import PlacesIcon from "./icons/PlacesIcon";


export default function AccountNav() {
    const {pathname} = useLocation();
    const subpage = pathname.split("/")?.[2] || "profile";

    function linkClasses (type=null) {
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
        if (type === subpage) {
            classes += ' bg-primary text-white';
        } else {
            classes += ' bg-gray-200'
        }
        return classes;
    }

    return (
        <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkClasses('profile')} to={'/account'}>
            <ProfileIcon />
            My profile
        </Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
            <BookingsIcon />
            My bookings
        </Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
            <PlacesIcon />
            My accommodations
        </Link>
    </nav>

    )
}