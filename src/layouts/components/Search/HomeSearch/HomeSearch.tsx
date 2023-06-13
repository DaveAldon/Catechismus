'use client';

import { FaSearch } from 'react-icons/fa';

export const HomeSearch = () => {
  return (
    <div className="flex w-96 flex-nowrap justify-start overflow-hidden rounded-md bg-theme-light shadow-lg dark:bg-darkmode-theme-light">
      <button className="btn border-none pr-0" type="submit">
        <FaSearch className="text-stone-500" />
      </button>
      <input
        className="form-input border-none"
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
