import { Product } from "@/app/interfaces/product.interface";

const ProductDetails = ({ searchParams }: { searchParams: Product }) => {   
    return (
        <div>
            Product page for product {searchParams.id}
        </div>
    )
};

export default ProductDetails;
