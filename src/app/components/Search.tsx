'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

/* Using NextJS capabilities, use the URL params as a state for storing
    the search term
 */
const Search = ({ placeholder }: { placeholder?: string }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string): void => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex border rounded-md">
            <label htmlFor="search"></label>
            <input
                id="search"
                className='flex-1 p-2 rounded-l-md'
                type="search"
                placeholder={placeholder ? placeholder : ""}
                defaultValue={searchParams.get('query')?.toString()} // Keep query and input in sync, for example, in case of a refresh
                onChange={(e) => handleSearch(e.target.value)}
            />
            <button className='bg-red-500 text-slate-50 px-2 rounded-r-md transition-colors hover:bg-red-600'>
                <Icon path={mdiMagnify} size={1} />
            </button>
        </div>
    )
};

export default Search;
