import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import "./sb-admin-2.min.css";
import UserList from './UserList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Portal from './Portal';
import Createuser from './Createuser';
import Userview from './Userview';
import UserEdit from './UserEdit';
import { UserProvider } from './usercontext';
import Listview from './Listview';

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="Createuser" element={<Createuser />} />
            <Route path="userview/:userid" element={<Userview />} />
            <Route path="useredit/:userid" element={<UserEdit />} />
            <Route path="listview/:userid" element={<Listview />} />
          </Route>
        </Routes>
      </UserProvider>

    </BrowserRouter>
  );
}

export default App;
