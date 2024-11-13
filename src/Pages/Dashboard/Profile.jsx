import React, { useState } from "react";
import Forgetpassword from "../User/Forgetpassword";
import axios from "axios";
import Viewprofile from "./Viewprofile";

function Profile() {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    // If using tokens, you can clear the token from localStorage or cookies
    localStorage.removeItem("userId");

    axios
      .post("http://localhost/login/logout.php")
      .then((response) => {
        console.log(response.data.message);
        window.location.href = "/login"; // Logout successful
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div>
      <button
        class="block text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        onClick={() => setOpen(true)}
      >
        <div className="bg-white w-9 h-9 rounded-full"></div>
      </button>

      {open && (
        <div className="bg-green-300 fixed top-15 right-5 z-50 content-center w-[10%] sm:w-[15%] text-white rounded-xl">
          <button
            onClick={() => setOpen(false)}
            className="text-white font-medium px-3"
          >
            X
          </button>
          <div class="p-4 md:p-5 space-y-4 text-center">
            <p>Username</p>
            <Viewprofile />
            <br />
            <button onClick={handleLogout}>Log Out</button> <br />
            <Forgetpassword />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
