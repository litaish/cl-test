import { Product } from "@/app/interfaces/product.interface";
import CategoryTag from "@/app/components/CategoryTag";
import React from "react";

const ProductSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-slate-700">{title}</h2>
            {children}
        </div>
    );
}

const ProductDetails = ({ searchParams }: { searchParams: Product }) => {
    const { name, price, currency, category, description } = searchParams;

    return (
        <main className="flex min-h-screen flex-col gap-6 mt-8 p-4 md:px-8">
            <h1 className="uppercase text-xl text-slate-700 lg:text-2xl">{name}</h1>
            <p className="text-4xl font-extralight text-slate-600 lg:text-5xl">
                {Number(price).toLocaleString('de-DE', { style: 'currency', currency: currency })}
            </p>
            <ProductSection title="Description">
                <p className="text-slate-600 text-base/loose">{description}</p>
            </ProductSection>
            <ProductSection title="Category">
                <CategoryTag categoryName={category} />
            </ProductSection>
        </main>
    )
};

export default ProductDetails;
