import React, { useState, useEffect } from "react";
import Header from "./Header";
import Save from "./Save";
import Withdraw from "./Withdraw";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function User() {
  const [transactions, setTransactions] = useState([]);
  const [totalDeposit, setTotalDeposit] = useState([]);
  const [totalBalance, setTotalBalance] = useState([]);
  const [totalWithdrawal, setTotalWithdrawal] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  // Fetch total balance
  const fetchTotalBalance = async () => {
    try {
      const response = await axios.get(
        `http://localhost/login/total.php?action=total-balance&userId=${userId}`
      );
      console.log(response);
      setTotalBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching total balance:", error);
    }
  };
  // Fetch total deposit
  const fetchTotalDeposit = async () => {
    try {
      const response = await axios.get(
        `http://localhost/login/display.php?action=total-deposit`
      );
      setTotalDeposit(response.data.totalDeposit);
    } catch (error) {
      console.error("Error fetching total deposit:", error);
    }
  };
  // Fetch total withdrawal
  const fetchTotalWithdrawal = async () => {
    try {
      const response = await axios.get(
        `http://localhost/login/displaywithdrawal.php?action=total-withdrawal`
      );
      setTotalWithdrawal(response.data.fetchTotalWithdrawal);
    } catch (error) {
      console.error("Error fetching total withdrawal:", error);
    }
  };

  useEffect(() => {
    fetchTotalDeposit();
    fetchTotalBalance();
    fetchTotalWithdrawal();
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      axios
        .get(`http://localhost/login/index.php?userId=${userId}`)
        .then((response) => {
          console.log(response.data);
          // if (Array.isArray(response.data)) {
          setTransactions(response.data); // Ensure it's an array
          // } else {
          //   console.error("API response is not an array:", response.data);
          // }
        })
        .catch((error) => {
          console.error("There was an error fetching the transactions!", error);
        });
    } else {
      // Handle the case when user_id is not found (e.g., redirect to login)
      navigate("/Login");
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className="w-[90%] mx-auto pt-12 pb-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-green-600 pt-3">
          Hello 🤗
          <br /> Welcome to Penny Wise
        </h1>
      </div>
      <div className="w-[90%] mx-auto block space-y-4 lg:flex justify-between my-8">
        <div className="bg-white text-green-600 shadow-md hover:shadow-xl hover:shadow-green-100 shadow-green-200 p-6 gap-6 border border-green-100 rounded-lg z-10">
          <h1 className="text-3xl font-semibold pb-4">Overall Deposit</h1>
          <p className="text-2xl font-medium">N{totalDeposit}.00</p>
        </div>
        <div className="bg-white text-green-600 shadow-md hover:shadow-xl hover:shadow-green-100 shadow-green-200 p-6 gap-6 border border-green-100 rounded-lg z-10">
          <h1 className="text-3xl font-semibold pb-4">Overall Withdrawal</h1>
          <p className="text-2xl font-medium">N{totalWithdrawal}.00</p>
        </div>
        <div className="bg-white text-green-600 shadow-md hover:shadow-xl hover:shadow-green-100 shadow-green-200 p-6 gap-6 border border-green-100 rounded-lg z-10">
          <h1 className="text-3xl font-semibold pb-4">Account Balance</h1>
          <p className="text-2xl font-medium">N{totalBalance}</p>
        </div>
      </div>

      <div className="flex justify-between w-[90%] mx-auto">
        <Save />
        <Withdraw />
      </div>

      <h2 className="text-green-600 text-center text-2xl font-semibold">
        Transaction Table
      </h2>

      <table class="table-auto gap-4 w-[90%] mx-auto bg-green-600 text-white my-4 p-6 border-collapse border border-white">
        <thead>
          <tr>
            <th className="border border-white">Amount</th>
            <th className="border border-white">Category</th>
            <th className="border border-white">Date</th>
          </tr>
        </thead>
        <tbody className="border border-white text-center">
          {transactions.map((transaction, index) => (
            <tr key={index} className="border border-white">
              <td className="border border-white">{transaction.amount}</td>
              <td className="border border-white">{transaction.category}</td>
              <td className="border border-white">
                {new Date(transaction.date).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
