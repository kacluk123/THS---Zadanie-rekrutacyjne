import * as React from 'react'
import './Input.css'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  inputIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, IInput>(({ title, inputIcon, ...props}, ref) => {
  return (
    <div className='Input_holder'>
      {title ? <span className='Input_title'>{title}</span> : null}
      <label className={`Input ${inputIcon ? 'Input__with_icon' : ''}`}>
        <input {...props} ref={ref} className='Input_element' />
        {inputIcon ? (
          <div className='Input_element_icon'>
            {inputIcon}
          </div>
        ) : null}
      </label>
    </div>
  )
}) 

export default Input