import './style.css';
import AuthModalContext from "./AuthModalContext";
import {useState,useEffect} from "react";
import axios from 'axios';
import UserContext from "./UserContext";
import Routing from "./Routing";
import PostFormModalContext from "./PostFormModalContext";
import RedirectContext from "./RedirectContext";
import { ThemeProvider } from './ThemeContext';

function App() {
  const [showAuthModal,setShowAuthModal] = useState(false);
  const [showPostFormModal,setShowPostFormModal] = useState(false);
  const [user,setUser] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {

    axios.get('http://localhost:4000/user', {withCredentials:true})
      .then(response => setUser(response.data));

  }, []);
  function logout() {
    axios.post('http://localhost:4000/logout', {}, {withCredentials:true})
      .then(() => setUser({}));
  }

  return (
<ThemeProvider>
    <AuthModalContext.Provider value={{show:showAuthModal,setShow:setShowAuthModal}}>
      <PostFormModalContext.Provider value={{show:showPostFormModal,setShow:setShowPostFormModal}}>
        <UserContext.Provider value={{...user, logout, setUser}}>
          <RedirectContext.Provider value={{redirect,setRedirect}}>
            <Routing />
          </RedirectContext.Provider>
        </UserContext.Provider>
      </PostFormModalContext.Provider>
    </AuthModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
