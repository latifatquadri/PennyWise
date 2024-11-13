import React, { useState } from "react";
import Logo from "../../../Assets/images/Penny_wise_logo.jpg";
import Login_img from "../../../Assets/images/Login_img.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({ username: "", pass: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    console.log(input);
  };

  const ForgetPassword = () => {
    window.location.href = "/forgetpassword";
  };

  const submitInput = async (e) => {
    e.preventDefault();
    const sendInput = {
      pass: input.pass,
      username: input.username,
    };

    axios
      .post("http://localhost/login/login.php", sendInput, {
        headers: {
          "Content-Type": "application/json", // Ensure the content type is JSON
        },
      })
      .then((response) => {
        // console.log("Server response:", response.data);
        // console.log("ade", response.data.status);
        // Handle the response
        console.log(response.data.user.id);
        if (response.data.status === "Success") {
          const userId = response.data.user.id;
          localStorage.setItem("userId", userId);
          navigate("/user");
          alert("Login Successful");
        } else {
          alert("Invalid User or Incorrect Password");
          // Redirect to login page
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-4">
      <div>
        <img
          src={Login_img}
          alt="Login_img"
          className="h-auto lg:h-full lg:visible max-sm:hidden"
        />
      </div>
      <div className=" w-[50%] mx-auto lg:h-[50%] sm:h-screen my-auto">
        <div className="flex items-center gap-4 mx-auto my-8 ">
          <img
            src={Logo}
            className="w-16 h-16 rounded-full"
            alt="Penny_wise Logo"
          />
          <h2 className="font-semibold text-3xl text-green-400">Penny Wise</h2>
        </div>
        <form onSubmit={submitInput} className="mx-auto" method="POST">
          <label for="username" className="text-green-400">
            Username:
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            value={input.username}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <br />
          <label for="pass" className="text-green-400">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="pass"
            name="pass"
            value={input.pass}
            onChange={handleChange}
            minlength="8"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <br />
          <div className="flex gap-8">
            <input
              type="submit"
              value="Log In"
              className="bg-green-400 text-white lg:font-medium h-12 rounded-xl w-full sm:font-normal p-2"
            />
            <input
              type="submit"
              value="Forget Password"
              onClick={ForgetPassword}
              className="bg-green-400 text-white lg:font-medium h-12 rounded-xl w-full sm:font-normal p-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
