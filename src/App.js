import { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ProfilContext } from './contexts/profil_context';
import './public/css/login.css'
import logo from './logo.svg';
//import './App.css';
import shared from "./shared/shared.js";
//layouts
import { Layout } from './ui/layout';
import { AdminLayout } from './ui/admin_layout';
//screens
import { Home } from './screens';
import { AccountRenew, AccountValidation, Account, Login,Login2, Logout, Register } from './screens/auth';
import { User } from './screens/user';
import { Admin } from './screens/admin';

import { NotFound } from './screens/not_found';

function App() {
  const { profil } = useContext(ProfilContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />}></Route>
          {!profil.user &&
            <>
              <Route path="/account/register" element={<Register />}></Route>
              <Route path="/account/validation" element={<AccountValidation />}></Route>
              <Route path="/account/renew" element={<AccountRenew />}></Route>
              <Route path="/account/login" element={<Login />}></Route>
              <Route path="/account/login2" element={<Login2 />}></Route>
            </>
          }
          {profil.user &&
            <>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/account/logout" element={<Logout />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </>
          }
        </Route>
          {profil.user && profil.user.role === 'Admin' &&
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin/" index element={<Admin />}></Route>
            </Route>
          }
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
