const Header = ({ title }: { title: string }) => {
    return (
        <header className="flex flex-col items-center justify-center text-center xl:w-full">
            <h1 className="mb-4 font-semibold text-slate-800 md:text-lg">
                {title}
            </h1>
            <hr className="w-5/6 xl:w-1/2" />
        </header>
    )
}

export default Header
