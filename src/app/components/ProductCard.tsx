import type { Product } from "../interfaces/product.interface";
import Link from "next/link";

const ProductCard = ({ id, name, category, currency, price }: Product) => {
    return (
        <Link href={{
            pathname: '/product',
            query: { id, name, category, currency, price }
        }}>
            <div className="flex">
                <p>{name}</p>
                <div>{category}</div>
                <div>
                    <p>{currency}</p>
                    <p>{price}</p>
                </div>
            </div>
        </Link>
    )
};

export default ProductCard;
