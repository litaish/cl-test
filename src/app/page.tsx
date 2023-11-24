import Products from "./components/Products";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            All products
            <Products />
        </main>
    )
}

export default Home;
