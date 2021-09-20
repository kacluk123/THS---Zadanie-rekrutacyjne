import * as React from 'react'

export const useRequestStatus = () => {
  const [ requestStatus, setRequestStatus ] = React.useState<"initial" | "pending" | "error" | "done">("initial")
  
  return {
    requestStatus,
    setRequestStatus
  }
}