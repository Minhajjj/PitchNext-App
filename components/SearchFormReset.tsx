"use client"
import React from 'react'
import { MdCancel } from "react-icons/md";
import Link from 'next/link';

const SearchFormReset = () => {

  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  return (
    <button type='reset' onClick={reset}>
      <Link href="/" className='search-btn'>
        <MdCancel />
      </Link>
    </button>
  )
}

export default SearchFormReset