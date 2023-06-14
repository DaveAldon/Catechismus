'use client';

import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  return (
    <div className="flex h-[36px] w-96 flex-nowrap justify-start overflow-hidden rounded-sm border border-stone-300 bg-theme-light dark:bg-darkmode-theme-light">
      <button className="btn border-none pr-0" type="submit">
        <FaSearch className="text-stone-500" />
      </button>
      <input
        className="form-input ml-0 border-none pl-4"
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
