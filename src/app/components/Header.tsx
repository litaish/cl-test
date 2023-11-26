
const Header = ({ title }: { title: string }) => {
  return (
    <header className="text-center flex flex-col justify-center items-center">
        <h1 className="text-slate-800 font-semibold mb-4">{title}</h1>
        <hr className="w-5/6"/>
    </header>
  )
};

export default Header
