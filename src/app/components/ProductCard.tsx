import type { Product } from '../interfaces/product.interface'
import CategoryTag from './CategoryTag'
import Link from 'next/link'

const ProductCard = ({
    id,
    name,
    category,
    currency,
    price,
    description,
}: Product) => {
    return (
        <Link
            href={{
                pathname: '/product',
                query: { id, name, category, currency, price, description },
            }}
        >
            <div className="grid grid-cols-2 items-center justify-between rounded-md border bg-white p-2 drop-shadow-sm">
                <div>
                    <p className="mb-1 font-semibold text-slate-800">{name}</p>
                    <CategoryTag categoryName={category} />
                </div>
                <div className="text-end">
                    <p className="text-xl font-semibold text-red-400">
                        {price.toLocaleString('de-DE', {
                            style: 'currency',
                            currency: currency,
                        })}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
