import Header from './components/Header'
import Products from './components/Products'
import Search from './components/Search'

/* Home page is a server component so it can access searchParams prop */
const Home = ({
    searchParams,
}: {
    searchParams?: {
        query?: string
    }
}) => {
    const query: string = searchParams?.query || ''

    return (
        <main className="mt-8 flex min-h-screen flex-col gap-8 p-4 md:px-8 lg:px-16 xl:items-center xl:gap-12">
            <Header title="All products" />
            <Search placeholder="Type a product name ..." />
            <Products query={query} />
        </main>
    )
}

export default Home
