import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-red-500 p-4 text-center font-semibold tracking-widest text-slate-50">
            <Link href="/">
                FoodShop
            </Link>
        </nav>
    )
}

export default Navbar
