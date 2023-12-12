import React from 'react'

const error="Error 404 not found";

function Error() {
  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl">
    {error}
  </div>
  )
}

export default Error