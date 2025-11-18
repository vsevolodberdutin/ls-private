import productsData from '@/data/products.json'

/**
 * Typed constants for product offerings
 * This provides type safety and follows the architectural pattern
 */
export const PRODUCTS = productsData

export type Product = (typeof PRODUCTS)[number]
export type ProductsData = typeof PRODUCTS
