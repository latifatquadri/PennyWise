import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <div className="mt-16">
      <h1 className="text-2xl lg:text-3xl font-bold text-green-600 text-center">
        Get In Touch With Us
      </h1>
      <p className="text-base lg:text-lg text-green-600 text-center font-medium lg:font-semibold p-2">
        We're here to help. If you have any questions or need support, please
        reach out to us using the form below.
      </p>
      <Form />
    </div>
  );
}

export default Contact;
