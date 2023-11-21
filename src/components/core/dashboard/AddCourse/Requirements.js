import React, { useEffect, useState } from 'react'

function Requirements({name, label, register, errors, setValue, getValues}) {
  const [requirements,setrequirements]=useState('');
  const [requirementslist,setrequirementslist]= useState([]);
  



   useEffect(()=>
   {
    // register(name,{required:true,
    // ValidityState:(value)=>value.length>0})

   })
const addhandler=()=>
{
    if(requirements)
    {
        console.log("requirements=>",requirements);
        setrequirementslist([...requirementslist,requirements]);
        setrequirements("");

    }

}

    const removehandler=(index)=>
    {
        const updatedList = [...requirementslist];
        updatedList.splice(index, 1);
        setrequirementslist(updatedList);
    }
    return (
    <div>

<label htmlFor={name}>{label}</label>
<input
type='text'
id={name}
onClick={(e)=>
{
    setrequirements(e.target.value);

}}
></input>
<br></br>
<button 
type='button'
onClick={addhandler}
className='font-semibold text-yellow-100'>
    add
</button>
{
    requirementslist.length>0 &&(
        <ul>
        {
            requirementslist.map((requirement,index)=>
            {
               return  <li key={index}>
                    
                    <span>{requirement}</span>
                    <button type='button'
                    onClick={removehandler(index)}
                    className='font-semibold text-yellow-100'>clear</button>
                    </li>
            }
            )

        }
           
        </ul>

    )
}
{
    errors[name] &&(
        <span> is required</span>
    )
 
}

    </div>
  )
}

export default Requirements