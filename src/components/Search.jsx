import React, { useState } from "react";
import axios from "axios";
import { UilSearchAlt } from "@iconscout/react-unicons";

const Search = ({ setProfileData }) => {
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setUsername(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setProfileData(response.data);
    } catch (error) {
      setProfileData(null);
    }
  };

  return (
    <div className="flex justify-center my-5 w-full px-6 md:px-0">
      <form
        onSubmit={handleSubmit}
        className="flex w-full md:w-5/6 lg:w-1/2 justify-center hover:scale-110 transition-all ease-in-out duration-500"
      >
        <input
          type="text"
          className="p-2 w-3/4 sm:w-4/5 lg:w-3/5 rounded-l-md outline-none"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter the Github User"
          aria-label="Search Github Users"
        />
        <button
          type="submit"
          className="flex items-center justify-center px-2 sm:px-4 lg:px-8 rounded-r-md bg-blue-500 text-white border-blue-500 border-t border-b border-r w-1/4 sm:w-1/5 lg:w-auto"
          aria-label="Search Button"
        >
          <UilSearchAlt className="text-sm sm:text-base lg:text-xl" />
        </button>
      </form>
    </div>
  );
};

export default Search;
