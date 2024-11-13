import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Save({ onTransactionAdded }) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleAddTransaction = async (e) => {
    e.preventDefault();

    const transactionData = {
      amount: amount,
      category: category,
    };

    const userId = localStorage.getItem("userId");

    if (userId) {
      try {
        const response = await axios.post(
          `http://localhost/login/save.php?userId=${userId}`,
          transactionData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status === "success") {
          onTransactionAdded(); // Call this to refresh the transaction list after adding
          setAmount("");
          setCategory("");
          alert("Transaction added successfully");
          // Optionally refresh the transaction list or redirect
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error adding transaction:", error);
        alert("An error occurred while adding the transaction");
      }
    } else {
      // Handle the case when user_id is not found (e.g., redirect to login)
      navigate("/Login");
    }
  };

  return (
    <div>
      <button
        className="bg-green-600 text-white shadow-lg shadow-green-100 hover:shadow-xl hover:shadow-green-200 px-8 py-3 rounded-lg z-10"
        onClick={() => setIsOpen(true)}
      >
        Save
      </button>
      {isOpen && (
        <div className="bg-green-200 fixed inset-0 items-center justify-center bg-opacity-75 z-50 content-center ">
          <form
            className="mx-auto w-[90%] lg:w-[50%] bg-green-300 p-12 "
            method="POST"
          >
            <h1 className="text-green-500 font-semibold text-center text-xl lg:text-2xl py-2">
              The penny you save counts!
            </h1>
            <p className="text-center text-2xl lg:text-3xl text-green-400 pb-2">
              Deposit form
            </p>
            <label for="amount" className="text-green-500">
              Amount:
            </label>
            <br />
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full rounded-md border-0 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-300 focus:ring-inset sm:text-sm sm:leading-6"
            />
            <br />
            <label for="category" className="text-green-500">
              Category(deposit/withdraw):
            </label>
            <br />
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full rounded-md border-0 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-300 focus:ring-inset sm:text-sm sm:leading-6"
            />
            <br />
            <div className="flex gap-4">
              <input
                type="submit"
                value="Save"
                onClick={handleAddTransaction}
                className="bg-green-400 text-white font-medium h-12 rounded-xl w-full"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="bg-green-400 text-white font-medium h-12 rounded-xl w-full"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Save;
