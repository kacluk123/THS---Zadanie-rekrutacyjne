import * as React from 'react'
import { range } from 'utils/range/range'
import './Pagination.css'

interface IPagination {
  currentPage: number;
  pages: number;
  handlePageChange: (page: number) => void
  handleFirst: () => void
  handleLast: () => void
}

const MAX_PAGES = 6

enum PaginationMode {
  all = 'all',
  first = 'first',
  middle = 'middle',
  last = 'last'
}

const SEPARATOR = '...'

const PaginationNumber = ({ page, handlePageChange, isActive }: { page: number, handlePageChange: (page: number) => void, isActive: boolean }) => (
  <div className={isActive ? 'Pagination_text__active' : 'Pagination_text'} onClick={() => { handlePageChange(page) }}>{page}</div>
)

const Separator = ({ separator }: { separator: string}) =>  <div className='Pagination_text'>{separator}</div>

const RenderSeparatorOrNumber = ({ pagesRange, handlePageChange, currentPage }: { pagesRange: (string | number)[], handlePageChange: (page: number) => void, currentPage: number}) => (
  <>
    {pagesRange.map(page => typeof page === 'number' ? (
        <PaginationNumber handlePageChange={handlePageChange} page={page} isActive={page === currentPage} />
      ) : <Separator separator={page} />)
    }
  </>
)

const GetPaginationNumbers = ({ paginationMode, pages , pagesOnScreen, currentPage, handlePageChange }: { paginationMode: PaginationMode, pages: number, pagesOnScreen: number, currentPage: number, handlePageChange: (page: number) => void }) => {
  switch (paginationMode) {
    case PaginationMode.all: {
      return (
        <>
          {range(1, pages).map(page => <PaginationNumber isActive={page === currentPage} handlePageChange={handlePageChange} page={page} />)}
        </>
      )
    }
    case PaginationMode.first: {
      const pagesRange = [...range(1, 3), SEPARATOR, ...range(pages - 2, pages)]
      return (
        <RenderSeparatorOrNumber 
          pagesRange={pagesRange}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )
    }
    case PaginationMode.middle: {
      const isBeforeLastElement = pages - 2 === currentPage + 1
      
      const pagesRange = [
        currentPage - (isBeforeLastElement ? 2 : 1), 
        isBeforeLastElement ? currentPage -1 : currentPage,
        isBeforeLastElement ? currentPage : currentPage + 1,
        SEPARATOR, 
        ...range(pages - 2, pages)
      ]
      return (
        <RenderSeparatorOrNumber 
          pagesRange={pagesRange}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )
    }
    case PaginationMode.last: {
      const pagesRange = [...range(pages - 5, pages - 3), SEPARATOR, ...range(pages - 2, pages)]
      return (
        <RenderSeparatorOrNumber 
          pagesRange={pagesRange}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )
    }
    default: {
      return null
    }
  }
}

const getCurrentPaginationMode = (pages: number, pagesOnScreen: number, currentPage: number) => {
  if (pagesOnScreen < pages && currentPage <= 2) {
    return PaginationMode.first
  } else if (pagesOnScreen < pages && currentPage >= pages - 2) {
    return PaginationMode.last
  } else if (pagesOnScreen < pages && currentPage >= 3) {
    return PaginationMode.middle
  }
  return PaginationMode.all
}

export const Pagination: React.FC<IPagination> = ({ currentPage, pages, handlePageChange, handleFirst, handleLast }) => {
  const paginationMode = getCurrentPaginationMode(pages, MAX_PAGES, currentPage)
  const isLastDisabled = currentPage === pages
  const isFirstDisabled = currentPage === 1

  if (pages === 0) {
    return null
  }

  return (
    <div className='Pagination'>
      <button className='Pagination_first_last' onClick={handleFirst} disabled={isFirstDisabled}>
        First
      </button>
      <div className='Pagination_numbers'>
        <GetPaginationNumbers 
          paginationMode={paginationMode} 
          pages={pages} 
          pagesOnScreen={MAX_PAGES} 
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <button className='Pagination_first_last' onClick={handleLast} disabled={isLastDisabled}>
        Last
      </button>
    </div>
  )
} 