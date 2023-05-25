'use client'
import React, { useEffect } from 'react'

// *? Este componente se usa cuando un componente no funcione, es como el "error 4040" solo de componente por ello el texto 'use client'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <p> something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  )
}
