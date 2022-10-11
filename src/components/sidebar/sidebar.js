import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../components/loading";
import Navbar from "../navbar/navbar";
import { Outlet, useNavigate } from "react-router-dom";

function Sidebar() {
  const [isLoading, setIsloading] = useState(false);
  const fetchData = () => {
    setIsloading(true);
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
}

export default Sidebar;
