import React, { useState } from "react";
import axios from "axios";

function Withdraw(onTransactionAdded) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // const handleAddTransaction = async () => {
  //   const response = await fetch("http://localhost/login/save.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ amount, category }),
  //   });

  //   const result = await response.json();

  //   if (result.status === "success") {
  //     onTransactionAdded(); // Call this to refresh the transaction list after adding
  //     setAmount("");
  //     setCategory("");
  //   } else {
  //     console.error("Error:", result.message);
  //   }
  // };

  const handleAddTransaction = async (e) => {
    e.preventDefault();

    const transactionData = {
      amount: amount,
      category: category,
    };

    const userId = localStorage.getItem("userId");

    try {
      const response = await axios.post(
        `http://localhost/login/withdraw.php?userId=${userId}`,
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
  };

  return (
    <div>
      <button
        className="bg-green-600 text-white shadow-lg shadow-green-100 hover:shadow-xl hover:shadow-green-200 px-8 py-3 rounded-lg z-10"
        onClick={() => setOpen(true)}
      >
        Withdraw
      </button>
      {open && (
        <div className="bg-green-200 fixed inset-0 items-center justify-center bg-opacity-75 z-50 content-center">
          <form
            className="mx-auto w-[90%] lg:w-[50%] bg-green-300 p-12 "
            method="POST"
          >
            <h1 className="text-green-500 font-semibold text-center text-lg lg:text-2xl py-2">
              The benefit of saving!
            </h1>
            <p className="text-center text-2xl lg:text-3xl text-green-400 pb-2">
              Withdrawal form
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
                value="Withdraw"
                onClick={handleAddTransaction}
                className="bg-green-400 text-white font-medium h-12 rounded-xl w-full"
              />
              <button
                onClick={() => setOpen(false)}
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

export default Withdraw;
