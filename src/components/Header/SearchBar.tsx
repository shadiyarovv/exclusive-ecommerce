import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="flex bg-gray-light relative rounded-md">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-transparent py-2 pl-5 pr-16 outline-none"
      />
      <Search className="absolute right-2 top-1/2 -translate-y-1/2" />
    </form>
  );
};

export default SearchBar;
