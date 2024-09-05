// SearchComponent.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const SearchComponent = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission here
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-400 rounded-md p-2 w-64 h-12"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="flex-grow p-2 outline-none"
      />
      <button type="submit" className="p-2">
        <FaSearch size={20} />
      </button>
    </form>
  );
};

export default SearchComponent;
