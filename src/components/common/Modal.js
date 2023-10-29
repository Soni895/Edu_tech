import React from 'react'
import Iconbtn from './Iconbtn'
const Modal = ({modaldata}) => {
  return (
    <div>
     <div>
     <p>
        {modaldata.data1}
        </p>
        <p>{modaldata.data2}</p>
        <div>
        <Iconbtn onclick={modaldata?.btnhandler1} 
        text={modaldata?.btntext1}>
        </Iconbtn> 
        <button onClick={modaldata?.btnhandler2}>
                {modaldata.btntext2}
            </button>
        </div>
     </div>
    </div>
  )
}

export default Modal