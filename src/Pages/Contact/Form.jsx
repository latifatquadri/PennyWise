import React from "react";

function Form() {
  return (
    <div>
      <form className="w-[90%] lg:w-[50%] mx-auto py-8">
        <h2 className="text-green-600 text-2xl lg:text-3xl font-bold my-4">
          Kindly fill the form
        </h2>
        <label for="name" className="text-green-600">
          Name:
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        <label for="email" className="text-green-600">
          Email:
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <br />
        <label for="email" className="text-green-600">
          Message:
        </label>
        <br />
        <textarea
          name="message"
          rows="5"
          cols="40"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
        <br />
        <input
          type="submit"
          value="Submit"
          className="bg-green-600 text-white font-medium w-full h-12 rounded-xl"
        />
      </form>
    </div>
  );
}

export default Form;
