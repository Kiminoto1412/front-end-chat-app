import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SetAvatar from "../pages/SetAvatar";
// import SetAvatar from "../pages/SetAvatar";

function Router() {
  return (
    <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
    </Routes>
  )
}

export default Router