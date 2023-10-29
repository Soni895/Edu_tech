import React from 'react'

const Modal = ({modaldata}) => {
  return (
    <div>
     <div>
     <p>
        {modaldata.data1}
        </p>
        <p>{modaldata.data2}</p>
        <></>
     </div>
    </div>
  )
}

export default Modal