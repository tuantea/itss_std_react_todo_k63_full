import React,{useState,useEffect} from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
import Login from "./components/Login";

import { auth, storeUserInfo } from "./lib/firebase";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };


  const Header = () => {
    if (user) {
      return (
        <div class="navbar-end">
          <div class="navbar-item">
            {user.name}
          </div>
          <div class="navbar-item">
            <button class="button is-danger  is-small" onClick={logout} > Logout</button>
          </div>
        </div >
      )
    } else {
      return (<Login />)
    }
  }
  return (
    <div className="container is-fluid">
       <header class="navbar">
        {loading ? (
          <p>
            LOADING.....
          </p>
        ) : (
          <Header/>
        )}
      </header >
      <div>
        {user && <Todo />}
      </div>
    </div >
  );
}

export default App;
