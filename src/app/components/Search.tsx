'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

/* Using NextJS capabilities, use the URL params as a state for storing
    the search term
 */
const Search = ({ placeholder }: { placeholder: string }) => {
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
        <div className="">
            <label htmlFor="site-search">Search the site:</label>
            <input 
            type="search" 
            placeholder={placeholder} 
            defaultValue={searchParams.get('query')?.toString()} // Keep query and input in sync, for example, in case of a refresh
            onChange={(e) => handleSearch(e.target.value)} 
            />
            <button>Search</button>
        </div>
    )
};

export default Search;
