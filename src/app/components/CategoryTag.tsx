
const CategoryTag = ({ categoryName }: { categoryName: string }) => {
    return (
        <div className="bg-red-500 rounded-full text-center text-xs text-slate-50 font-semibold py-1 px-6 max-w-fit">
            {categoryName}
        </div>
    )
};

export default CategoryTag
