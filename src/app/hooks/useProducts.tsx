'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Product } from "../interfaces/product.interface";

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd');
            return data.products as Product[];
        }
    });
}