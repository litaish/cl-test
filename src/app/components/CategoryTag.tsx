const CategoryTag = ({ categoryName }: { categoryName: string }) => {
    return (
        <div className="max-w-fit rounded-full bg-red-500 px-6 py-1 text-center text-xs font-semibold text-slate-50">
            {categoryName}
        </div>
    )
}

export default CategoryTag
