import { createQueryParams } from "api/shared/shared";
import { API_URL } from "api/url";
import * as Types from './products.types'

export const getProducts = async (query: Types.ServerResponseProductsQuery) => {
  const response = await fetch(`${API_URL}/products${createQueryParams(query)}`)
  const products: Types.ServerResponseProducts = await response.json()
  return products
}