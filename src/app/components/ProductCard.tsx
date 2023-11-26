import type { Product } from "../interfaces/product.interface";
import CategoryTag from "./CategoryTag";
import Link from "next/link";

const ProductCard = ({ id, name, category, currency, price, description }: Product) => {
    return (
        <Link href={{
            pathname: '/product',
            query: { id, name, category, currency, price, description }
        }}>
            <div className="grid grid-cols-2 justify-between items-center bg-white border rounded-md drop-shadow-sm p-2">
                <div>
                    <p className="mb-1 font-semibold text-slate-800">{name}</p>
                    <CategoryTag categoryName={category} />
                </div>
                <div className="text-end">
                    <p className="text-red-400 text-xl font-semibold">
                        {price.toLocaleString('de-DE', { style: 'currency', currency: currency })}
                    </p>
                </div>
            </div>
        </Link>
    )
};

export default ProductCard;
