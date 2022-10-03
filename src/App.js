import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AccountScreen from "./screens/AccountScreen";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import UserScreen from "./screens/LoggedScreen";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="p-2">
          <Link to="/" className="btn btn-sm btn-primary me-2">Home</Link>
          <Link to="/login" className="btn btn-sm btn-primary me-2">Login</Link>
          <Link to="/admin" className="btn btn-sm btn-primary me-2">Admin</Link>
          <Link to="/logged" className="btn btn-sm btn-primary me-2">Logged</Link>
          <Link to="/account" className="btn btn-sm btn-primary">Account</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/logged" element={<UserScreen />} />
          <Route path="/account" element={<AccountScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
