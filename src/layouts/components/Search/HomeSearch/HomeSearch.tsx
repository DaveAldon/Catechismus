'use client';

import { FaSearch } from 'react-icons/fa';

export const HomeSearch = () => {
  return (
    <div className="flex w-1/3 flex-nowrap shadow-lg">
      <button
        className="btn btn-primary rounded-r-none border-none bg-white"
        type="submit">
        <FaSearch className="text-stone-500" />
      </button>
      <input
        className="form-input rounded-l-none border-none bg-white"
        placeholder="Search by numeral or keyword"
        type="search"
        name="search"
        value={''}
        onChange={() => {}}
        autoComplete="off"
        autoFocus
      />
    </div>
  );
};
