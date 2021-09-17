export interface ServerResponsePagination {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export interface ServerResponseLinks {
  first: string
  previous: string
  next: string
  last: string
}