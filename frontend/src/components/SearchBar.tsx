import React, { useState } from "react";

/**
 * Props for the SearchBar component
 * @param onSearch - Function to call when the search query is submitted
 */
interface SearchBarProps {
  onSearch: (query: string) => void;
}

/**
 * The SearchBar component
 * @param onSearch - Function to call when the search query is submitted
 * @returns A form with a text input and a submit button
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // current search query

  /**
   * Handle form submission
   * @param event - Form submission event
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query); // call the onSearch function with the current query
  };

  return (
    <div className="w-full max-w-2xl text-center">
      <h2 className="text-3xl font-bold mb-3">Welcome to WikiGraph</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center space-x-4"
      >
        {/* Text input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search Wikipedia articles..."
          className="w-full px-8 py-4 rounded-3xl text-gray-900"
        />
        {/* Submit button */}
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500 hover:shadow-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
