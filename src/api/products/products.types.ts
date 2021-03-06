import { ServerResponseLinks, ServerResponsePagination } from "api/shared/shared.types";

export interface ServerResponseProduct {
  id: number,
  name: string
  description: string,
  rating: number,
  image: string
  promo: boolean,
  active: boolean
}

export interface ServerResponseProducts {
  items: ServerResponseProduct[]
  meta: ServerResponsePagination
  links: ServerResponseLinks
}

export interface ProductsQuery {
  search?: string
  limit?: number
  page?: number
  promo?: boolean
  active?: boolean
}