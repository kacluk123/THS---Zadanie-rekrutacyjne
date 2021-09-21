import * as React from 'react'

import './Spiner.css'

export const Spinner = () => (
  <svg data-testid='Spinner' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='Spinner'>
    <circle cx="30" cy="30" r="28" stroke="#E0E2EA" strokeWidth="4"/>
    <path d="M58 30C58 14.536 45.464 2 30 2" stroke="#4460F7" strokeWidth="4" strokeLinecap="round"/>
  </svg>
)
