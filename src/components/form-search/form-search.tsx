import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { FormInput } from "@/components";

type Props = {}

const FormSearch = (props: Props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState("");

    return (
        <form className="tables-search-input">
            <label className="relative flex items-center group">
                <span className="absolute inset-y-0 left-0 flex items-center justify-center w-9 h-9 text-gray-400 pointer-events-none group-focus-within:text-primary-500">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>        
                </span>

                <input placeholder="Search" type="search" autoComplete="off" className="block w-full max-w-xs h-9 pl-9 placeholder-gray-400 placeholder:font-light placeholder:text-[.98rem] transition duration-75 border-gray-300/90 rounded-lg shadow-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-inset focus:ring-primary-500" />

                <span className="sr-only">
                    Search
                </span>
            </label>
        </form>
    )
}

export default FormSearch