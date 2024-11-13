import React, { useState, useEffect } from "react";

function Viewprofile() {
  const userId = localStorage.getItem("userId");
  const [profile, setProfile] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     // Fetch user data from the PHP API
  //     fetch(`http://localhost/login/profile.php?userId=${userId}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.error) {
  //           alert("Error in fetching User Details");
  //         } else {
  //           alert("User Details!");
  //         }
  //       })
  //       .catch(() => {
  //         setError("Failed to fetch user details");
  //       });
  //   }, [userId]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost/login/profile.php?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("API Response:", data); // Debugging: Check API response in the console

        if (data.error) {
          setError(data.error);
        } else {
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to fetch user details");
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }
  console.log(user);

  return (
    <div>
      <button onClick={() => setProfile(true)}>View Profile</button>
      {profile && (
        <div className="bg-green-200 fixed inset-0 items-center justify-center bg-opacity-75 z-50 content-center ">
          <form className="mx-auto w-[90%] lg:w-[50%] bg-green-300 p-12 ">
            <h1 className="text-2xl font-medium">User Details</h1>
            <br />
            <p>
              <strong>First Name: </strong>
              {user.data.first_name}
            </p>
            <br />
            <p>
              <strong>Last Name: </strong>
              {user.data.last_name}
            </p>
            <br />
            <p>
              <strong>Email: </strong>
              {user.data.email}
            </p>
            <br />
            <p>
              <strong>Username: </strong>
              {user.data.user_name}
            </p>
            <br />
            <p>
              <strong>Phone Number: </strong>
              {user.data.phone_number}
            </p>
            <br />
            <p>
              <strong>Joined Date: </strong>
              {user.data.created_at}
            </p>
            <br />
            <button
              onClick={() => setProfile(false)}
              className="bg-green-400 text-white font-medium h-12 rounded-xl w-[50%]"
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Viewprofile;
