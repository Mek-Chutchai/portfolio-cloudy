import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div class="flex bg-zinc-300 p-5">
      <div class="w-40 cursor-pointer ...">
        <p>Cloudy Marketplace</p>
      </div>
      <div class="flex px-10" style={{ gap: "2rem" }}>
        <div onClick={() => navigate("/experience")} class="cursor-pointer">
          <p>experience</p>
        </div>
        <div onClick={() => navigate("/skill")} class="cursor-pointer">
          <p>Skill</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
