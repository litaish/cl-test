
const Header = ({ title }: { title: string }) => {
  return (
    <header className="text-center flex flex-col justify-center items-center xl:w-full">
        <h1 className="text-slate-800 font-semibold mb-4 md:text-lg">{title}</h1>
        <hr className="w-5/6 xl:w-1/2"/>
    </header>
  )
};

export default Header
