import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../ProductCard";
import { Product } from "@/app/interfaces/product.interface";

const product : Product = {
    id: 2,
    name: "Banana",
    price: 0.65,
    currency: "EUR",
    category: "Fruits",
    description: "Description for a banana"
}

describe("Product Card", () => {
    it("Link has proper href (correct product URL)", () => {
        render(<ProductCard {...product} />);

        expect(screen.getByRole('link')).toHaveAttribute(
            'href',
            `/product?id=${product.id}&name=${product.name}&category=${product.category}&currency=${product.currency}&price=${product.price}`
        )
    })
});