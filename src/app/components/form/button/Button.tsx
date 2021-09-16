import * as React from 'react'

import './Button.css'

type buttonTypes = 'primary' | 'secondary'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: buttonTypes
}

const buttonStyles: {[k in buttonTypes]: string} = {
  'primary': 'Button__primary',
  'secondary': 'Button__secondary' 
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(({
  theme = 'primary',  
  children, 
  ...props
}, ref) => {
  return (
    <button {...props} className={`Button ${buttonStyles[theme]}`} ref={ref}>
      {children}
    </button>
  )
})

export default Button