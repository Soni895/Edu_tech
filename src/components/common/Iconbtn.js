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
        children ?(
            <div className='flex gap-2 items-center justify-center'>
            <span>
                {text}
            </span>
            {children}
            </div>
          
        ):
        ( <span>
                {text}
            </span>)
     }
        
    </button>
  )
}

export default Iconbtn