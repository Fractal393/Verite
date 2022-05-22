import Logo from "./logo.png";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  LoginIcon,
  LogoutIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,SunIcon,GlobeAltIcon
} from "@heroicons/react/outline";
import Avatar from "./avatar.png";
import ClickOutHandler from 'react-clickout-handler';
import Button from "./Button";
import {useState,useContext} from 'react';
import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import {Link} from "react-router-dom";
import RedirectContext from "./RedirectContext";
import { ThemeContext } from './ThemeContext';
import Toggle from "./ThemeToggle";
import Competitions from "./competitions";
function Header() {
  const [userDropdownVisibilityClass,setUserDropdownVisibilityClass] = useState('hidden');
  const [searchText,setSearchText] = useState('');
  const {setRedirect} = useContext(RedirectContext);
  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === 'hidden') {
      setUserDropdownVisibilityClass('block');
    } else {
      setUserDropdownVisibilityClass('hidden');
    }
  }
  function doSearch(ev) {
    ev.preventDefault();
    setRedirect('/search/'+encodeURIComponent(searchText));
  }

  function goComp(ev) {
    ev.preventDefault();
    setRedirect('/Competitions');
  }

  const authModal = useContext(AuthModalContext);
  const user = useContext(UserContext);
  return (
    
    <header className="w-full bg-white dark:bg-verite_dark p-2">
      
      <div className="mx-4 flex relative">
        <Link to="/">
          <img src={Logo} alt="" className="w-8 h-8 mr-4"/>
        </Link>
        <form onSubmit={doSearch} className="bg-verite_light-brighter  dark:bg-verite_dark-brighter  px-3 flex rounded-md border border-gray-400 mx-4 flex-grow">
          <SearchIcon className="text-gray-400 dark:bg-verite_dark-brighter h-6 w-6 mt-1" />
          <input type="text" className="w-full bg-verite_light-brighter dark:bg-verite_dark-brighter  text-gray-500 dark:text-gray-400 text-sm p-1 pl-2 pr-0 block focus:outline-none text-none"
                 placeholder="Search"
                 value={searchText}
                 onChange={ev => setSearchText(ev.target.value)}
          />
        </form>
        <div className=" bg-verite_light-brighter dark:bg-verite_dark-brighter rounded-full h-6 w-6 mt-1 mr-2">
    <Toggle />
    </div>
    <div >
    <GlobeAltIcon className=" text-gray-500 dark:text-gray-400 text-2xs cursor-pointer h-6 w-6 mt-1 ml-1" alt = "competitions" onClick={goComp}/>
    </div>
  

        {!user.username && (
          <div className="mx-2 hidden sm:block">
            <Button outline={1} className=" text-gray-600 border-gray-600 mr-1 h-8" onClick={() => authModal.setShow('login')}>Log In</Button>
            <Button className="text-gray-600  border-gray-500 h-8 " onClick={() => authModal.setShow('register')}>Sign Up</Button>
          </div>
        )}

        <ClickOutHandler onClickOut={() => setUserDropdownVisibilityClass('hidden')}>
          <button className="rounded-md flex ml-4 border border-gray-500" onClick={() => toggleUserDropdown()}>
            {!user.username && (
              <UserIcon className="w-6 h-6 text-gray-400 m-1" />
            )}
            {user.username && (
              <div className="bg-gray-600 rounded-md w-8 h-8">
                <img src={Avatar} alt="" style={{filter:'invert(100%)'}} className="block" />
              </div>
            )}

            <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 m-1" />
          </button>
          <div className={"absolute right-0 top-8 bg-verite_light dark:bg-verite_dark border border-gray-600 z-10 rounded-md text-gray-600 dark:text-gray-200 overflow-hidden "+userDropdownVisibilityClass}>
            {user.username && (
              <span className="block w-50 py-2 px-3 text-sm">
                Hello, {user.username}!
              </span>
            )}
            {!user.username && (
              <button
                onClick={() => authModal.setShow('login')}
                className="block flex w-50 py-2 px-3 bg-verite_light dark:bg-verite_dark rounded-md text-gray-600 dark:text-gray-200 text-sm">
                <LoginIcon className="w-5 h-5 mr-2" />
                Log In / Sign Up
              </button>
            )}
            {user.username && (
              <button
                onClick={() => user.logout()}
                className="block flex w-50 py-2 px-3  bg-verite_light dark:bg-verite_dark  rounded-md text-gray-600 dark:text-gray-200 text-sm">
                <LogoutIcon className="w-5 h-5 mr-2" />
                Logout
              </button>
            )}
          </div>
        </ClickOutHandler>
      </div>
      

    </header>
   
  );
}

export default Header;