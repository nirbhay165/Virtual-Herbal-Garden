import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const Main = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className="bg-prigmayBG">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
        
        <Outlet />
        
      </div>
      )}
       
    </div>
  );
};

export default Main;