import Header from "./components/Header";
import Products from "./components/Products";
import Search from "./components/Search";

/* Home page is a server component so it can access searchParams prop */
const Home = ({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) => {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Header title="All products"/>
            <Search placeholder="Type a product ..."/>
            <Products query={query}/>
        </main>
    )
}

export default Home;
