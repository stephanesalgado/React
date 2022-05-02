import React, { useState } from 'react'

export const UseArray = () => {

    const [list, setList] = useState(['María','Pedro','Antonio','Marta'])
  return (


    <div>

        <h1>UseArray</h1>

        {list.map((nombre, index)=>{


            return(
                <button key={index}>
                    {nombre}
                </button>
                

            )
        })}
        
    </div>
  )
}
