import { icons } from 'app/components/icons'
import * as React from 'react'
import './Checkbox.css'

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string
}

const Checkbox = React.forwardRef<HTMLInputElement, ICheckbox>(({ checked, title, ...props }, ref) => {
  return (
    <label className="Checkbox">
      <input type="checkbox" className="Checkbox_input" checked={checked} {...props} />
      <span className="Checkbox_checkmark">
        {checked ? <icons.CheckIcon color='#FFFFFF' width={16} height={16} /> : null} 
      </span>
      <span className="Checkbox_title">{title}</span>
    </label>
  )
})
export default Checkbox