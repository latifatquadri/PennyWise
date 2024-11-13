import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // for handling query params like the token

function Forgetpassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [view, setView] = useState("request"); // 'request', 'verify', or 'reset'

  const location = useLocation();

  // 1. Request password reset (sending email)
  const requestPasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/login/request.php", {
        email,
      });
      setMessage(response.data.message);
      setView("verify"); // Move to verification stage
    } catch (error) {
      setMessage("Error requesting password reset");
      console.error(error);
    }
  };

  // 2. Verify token (if token is in the query params, we automatically verify)
  const verifyToken = async () => {
    const queryToken = new URLSearchParams(location.search).get("token"); // Extract token from URL
    if (queryToken) {
      try {
        const response = await axios.get(
          `http://localhost/login/verify.php?token=${queryToken}`
        );
        setMessage(response.data.message);
        if (response.data.message === "Token is valid") {
          setToken(queryToken);
          setView("reset"); // Move to reset password stage
        } else {
          setMessage("Invalid or expired token");
        }
      } catch (error) {
        setMessage("Error verifying token");
        console.error(error);
      }
    }
  };

  // 3. Reset the password (after token is verified)
  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/login/reset.php", {
        token,
        new_password: newPassword,
      });
      setMessage(response.data.message);
      if (response.data.message === "Password has been reset successfully") {
        setView("success"); // Password reset is done
      }
    } catch (error) {
      setMessage("Error resetting password");
      console.error(error);
    }
  };

  // Automatically verify token if present in the URL when the component loads
  React.useEffect(() => {
    verifyToken();
  }, []);

  return (
    <div className="h-dvh">
      <h1 className="text-center text-2xl font-bold text-green-400 py-12">
        Forgot Password
      </h1>
      {message && <p className="text-green-500 text-center">{message}</p>}

      {view === "request" && (
        <form
          onSubmit={requestPasswordReset}
          className="mx-auto w-[70%]"
          method="POST"
        >
          <label className="text-green-400">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          />
          <br />
          <button
            className="text-white text-center text-xl bg-green-400 rounded-xl w-[50%] h-12"
            type="submit"
          >
            Request Password Reset
          </button>
        </form>
      )}

      {view === "verify" && (
        <div className="text-center w-[70%] mx-auto">
          <p className="text-green-300 text-xl font-medium">
            Please check your email for the reset link.If the token is valid,
            you'll be redirected to reset your password.
          </p>
        </div>
      )}

      {view === "reset" && (
        <form onSubmit={resetPassword} method="POST">
          <label>New Password:</label> <br />
          <input
            type="password"
            name="newpassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />{" "}
          <br />
          <button
            className="text-white text-center bg-green-400 rounded-xl w-[50%] "
            type="submit"
          >
            Reset Password
          </button>
        </form>
      )}

      {view === "success" && (
        <p>
          Your password has been reset. You can now login with your new
          password.
        </p>
      )}
    </div>
  );
}

export default Forgetpassword;
