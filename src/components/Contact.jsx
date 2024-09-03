import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="flex justify-center align-middle flex-col w-96 font-serif shadow-xl rounded-lg m-auto mt-28">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col justify-center align-middle gap-5"
      >
        <h1 className="text-3xl m-auto mt-10 mb-10 font-medium">
          Contact Admin
        </h1>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 p-3 w-4/5 m-auto rounded-md shadow-md  focus:outline-none focus:shadow-blue-200"
        />
        <textarea
          id="message"
          name="message"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 p-3 h-28 w-4/5 max-w-full m-auto rounded-md shadow-md focus:shadow-blue-200 resize focus:outline-none"
        />

        <button
          type="submit"
          className="inline-flex items-center w-20 px-4 py-2 m-auto mb-10 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
