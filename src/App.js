import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AccountScreen from "./screens/AccountScreen";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import UserScreen from "./screens/LoggedScreen";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import { deleteCookie } from "./helpers/cookieHelper";

function App() {

  const { auth, setAuth } = useContext(AuthContext);

  return (
    <div className="container">
      <BrowserRouter>
        <div className="p-2">
          <Link to="/" className="btn btn-sm btn-primary me-2">Home</Link>
          {auth.role === 0 && 
            <Link to="/login" className="btn btn-sm btn-primary me-2">Login</Link>}
          {auth.role === 1 && 
            <Link to="/admin" className="btn btn-sm btn-primary me-2">Admin</Link>}
          {auth.role > 0 && 
            <Link to="/logged" className="btn btn-sm btn-primary me-2">Logged</Link>}
          {auth.role > 0 && 
            <Link to="/account" className="btn btn-sm btn-primary me-2">Account</Link>}
          {auth.role > 0 && 
          <button className="btn btn-sm btn-secondary" 
              onClick={e => {
                  setAuth({role:0, id:0});
                  deleteCookie("blog");
                  window.location.href = "/login";
                }
              }>LOGOUT</button>}
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {auth.role === 0 && <Route path="/login" element={<LoginScreen />} />}
          {auth.role === 1 && <Route path="/admin" element={<AdminScreen />} />}
          {auth.role > 0 && <Route path="/logged" element={<UserScreen />} />}
          {auth.role > 0 && <Route path="/account" element={<AccountScreen />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
