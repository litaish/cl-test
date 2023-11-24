'use client'

import type { Product } from "../interfaces/product.interface";

const ProductCard = ({ id, name, category, currency, price }: Product) => {
    return (
        <div>
            <p>{name}</p>
            <div>{category}</div>
            <div>
                <p>{currency}</p>
                <p>{price}</p>
            </div>
        </div>
    )
};

export default ProductCard;
