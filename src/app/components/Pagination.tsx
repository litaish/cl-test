const Pagination = ({
    itemsSize,
    currentPage, // Identify current page with CSS
    pageSize,
    onPageChange,
}: {
    itemsSize: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}) => {
    const pagesCount = Math.ceil(itemsSize / pageSize); // Example: 20 / 4 = 5 pages

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1); // Array of page numbers


    return (
        <div className="mt-8">
            <ul className="flex justify-center gap-8">
                {pages.map((page) => (
                    <li key={page} className={`${currentPage === page ? 'text-slate-400' : 'text-slate-700'}`}>
                        <button className="text-center p-1" disabled={currentPage === page} onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
