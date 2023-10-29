import React from 'react'

function Iconbtn({
    text,
    onclick,
    children,
    disable=false,
    outline,
    type
})
 {
    console.log(text,children,onclick);
  return (
  
    <button 
    
    disabled={disable}
    onClick={onclick}
     >
     {
       ! children ?(
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