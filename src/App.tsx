import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/users/Users";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/users/create"} element={<UserCreate />} />
          <Route path={"/users/:id/edit"} element={<UserEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
