import Products from "./components/Products";
import Search from "./components/Search";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            All products
            <Search />
            <Products />
        </main>
    )
}

export default Home;
