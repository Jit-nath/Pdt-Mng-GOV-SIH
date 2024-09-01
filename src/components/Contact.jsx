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
    <div className="flex justify-center align-middle border w-2/3 max-w-600 flex-col m-auto mt-36 p-10">
      <h1 className="text-4x1">Contact Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-2/3 m-auto border border-black rounded-md shadow-sm bg-gray-600"
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-2/3 m-auto border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
