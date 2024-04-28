import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./Components/Home/Home";
import AxiosApi from "./Components/Axios/Axios";
import Button from './Components/Button/Button'

import Profile from "./Components/Hero/Profile";

function AuthenticatedApp() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='/users' />}/>
        <Route path="/users" element={<Home />}/>
        <Route path="/Axios" element={<AxiosApi />}/>
        <Route path="/Button" element={<Button />}/>
        <Route path="/profile/:user_id" element={<Profile />}/>
      </Routes>
    </>
  );
}


export default AuthenticatedApp;