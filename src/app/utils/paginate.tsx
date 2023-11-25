export const paginate = <T,>(items: T[] | undefined, pageNumber: number, pageSize: number): T[] => {
    if (!items) return [];

    // Start index of array: array of 20 items, page number = 2, page size = 10, start index = 10 
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
};