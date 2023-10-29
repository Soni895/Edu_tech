import React from 'react'

function Iconbtn({
    text,
    onclick,
    children,
    disable,
    outline,
    type
}) {
  return (
  
    <button 
    
    disabled={disable}
    type={type}
    onClick={onclick}
     >
     {
        children ?(
            <>
            <span>
                {text}
            </span>
            {children}
            </>
          
        ):
        (<div>hi</div>)
     }
        
    </button>
  )
}

export default Iconbtn