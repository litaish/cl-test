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
        <div>
            <ul>
                {pages.map((page) => (
                    <li key={page}>
                        <button disabled={currentPage === page} onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
