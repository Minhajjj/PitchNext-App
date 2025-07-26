import React from 'react'
import Form from 'next/form'
import { IoMdSearch } from "react-icons/io";
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search for startups, pitches, or entrepreneurs..."
        className="search-input"
      />

      <div className='flex gap-2'></div>
      {query && <SearchFormReset />}

      <button type="submit" className="search-btn">
        <IoMdSearch />
        {/* <Search /> */}
      </button>
    </Form>
  )
}

export default SearchForm