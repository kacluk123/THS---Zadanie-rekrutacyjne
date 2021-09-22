import * as React from 'react'

import { api } from 'api'
import { ServerResponseProducts, ProductsQuery } from 'api/products/products.types'
import { useRequestStatus } from '../useRequestStatus/useRequestStatus'
import { useDebounce } from '../useDebounce/useDebounce'

export const useProducts = () => {
  const [ products, setProducts ] = React.useState<ServerResponseProducts | null>(null)
  const [ query, setQuery ] = React.useState<ProductsQuery>({
    limit: 6,
    page: 1,
    search: ""
  })

  const { requestStatus, setRequestStatus } = useRequestStatus()

  const debouncedSearchTerm = useDebounce(query.search, 600);

  React.useEffect(() => {
    fetchProducts()
  }, [query.page, query.active, query.promo, debouncedSearchTerm])

  const fetchProducts = async () => {
    setRequestStatus('pending')
    try {
      const products = await api.products.getProducts(query)
      setProducts(products)
    } catch {
      //and maybe some notification 
      setRequestStatus("error")
    } finally {
      setRequestStatus('done')
    }
  }

  const manipulateQuery = (query: ProductsQuery) => {
    setQuery(query)
  }

  return {
    products,
    requestStatus,
    manipulateQuery,
    query,
  }
}