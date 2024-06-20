import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import AirbnbIcon from "./components/icons/AirbnbIcon";
import SearchIcon from "./components/icons/SearchIcon";
import MenuIcon from "./components/icons/UserIcon";
import UserIcon from "./components/icons/MenuIcon";

export default function Header () {
  const {user} = useContext(UserContext);
    return (
        <header className='flex justify-between'>
        <Link to={'/'} className='flex items-center gap-1'>
          <AirbnbIcon />
        <span className='font-bold text-xl'>airbnb</span>
        </Link>
        <div className='flex gap-2 border brder-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <div>Anywhere</div>
          <div className='border border-l border-gray-300'></div>
          <div>Any week</div>
          <div className='border border-l border-gray-300'></div>
          <div>Add guests</div>
          <button className='bg-primary text-white p-1 rounded-full'>
            <SearchIcon />
          </button>
        </div>
        <Link to={user?'/account':'/login'} className='flex items-center gap-2 border brder-gray-300 rounded-full py-2 px-4'>
          <MenuIcon />
          <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
          <UserIcon />
          </div>
          {!!user && (
            <div>
              {user.name}
            </div>
          )}
        </Link>
      </header>

    )
}