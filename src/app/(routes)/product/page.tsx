import { Product } from '@/app/interfaces/product.interface'
import CategoryTag from '@/app/components/CategoryTag'
import React from 'react'

const ProductSection = ({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-slate-700">{title}</h2>
            {children}
        </div>
    )
}

const ProductDetails = ({ searchParams }: { searchParams: Product }) => {
    const { name, price, currency, category, description } = searchParams

    return (
        <main className="mt-8 flex items-center min-h-screen flex-col p-4 md:px-8">
            <div className='flex flex-col gap-6'>
                <h1 className="text-xl uppercase text-slate-700 lg:text-2xl">
                    {name}
                </h1>
                <p className="text-4xl font-extralight text-slate-600 lg:text-5xl">
                    {Number(price).toLocaleString('de-DE', {
                        style: 'currency',
                        currency: currency,
                    })}
                </p>
                <ProductSection title="Description">
                    <p className="text-base/loose text-slate-600">{description}</p>
                </ProductSection>
                <ProductSection title="Category">
                    <CategoryTag categoryName={category} />
                </ProductSection>
            </div>
        </main>
    )
}

export default ProductDetails
