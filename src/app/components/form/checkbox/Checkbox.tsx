import * as React from 'react'

import './Checkbox.css'

import { icons } from 'app/components/icons'


interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, ICheckbox>(({ checked, title, ...props }, ref) => {
  return (
    <label className="Checkbox">
      <input type="checkbox" className="Checkbox_input" checked={checked} ref={ref} {...props} />
      <span className="Checkbox_checkmark">
        {checked ? <icons.CheckIcon color='var(--main-white)' width={16} height={16} /> : null} 
      </span>
      <span className="Checkbox_title">{title}</span>
    </label>
  )
})
