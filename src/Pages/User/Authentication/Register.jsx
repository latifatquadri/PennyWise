import React, { useState } from "react";
import Img from "../../../Assets/images/Penny_wise_img.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  let history = useNavigate();
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    pass: "",
    username: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const sendData = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      pnumber: data.pnumber,
      pass: data.pass,
      username: data.username,
    };

    try {
      const result = await axios.post(
        "http://localhost/login/register.php",
        sendData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (result.data.Status === "Invalid") {
        alert("Invalid User");
      } else {
        // Redirect to login page
        history("/Login");
      }
    } catch (error) {
      console.error("Error while sending data to the API:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
      <div>
        <img
          src={Img}
          alt="Penny_wise img"
          className="h-auto w-auto lg:h-full max-sm:hidden lg:visible"
        />
      </div>
      <form
        method="POST"
        onSubmit={submitForm}
        className="w-[90%] lg:w-[50%] mx-auto py-8 "
      >
        <p className="text-green-400 text-3xl lg:text-4xl font-extrabold my-2">
          Welcome
        </p>
        <h2 className="text-green-400 text-3xl font-bold my-4">
          Let's get you started!
        </h2>
        <label for="fname" className="text-green-400">
          First Name:
        </label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={data.fname}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        <label for="lname" className="text-green-400">
          Last Name:
        </label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={data.lname}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        <label for="email" className="text-green-400">
          Email:
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        <label for="pnumber" className="text-green-400">
          Phone Number:
        </label>
        <br />
        <input
          type="tel"
          id="pnumber"
          name="pnumber"
          value={data.pnumber}
          onChange={handleChange}
          required
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
          value={data.pass}
          onChange={handleChange}
          minlength="8"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        <label for="username" className="text-green-400">
          User Name:
        </label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        <input
          type="submit"
          value="Register"
          className="bg-green-400 text-white font-medium w-full h-12 rounded-xl"
        />
      </form>
    </div>
  );
}

export default Register;
