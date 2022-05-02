import React, { useEffect,useState } from 'react'

export const UseEffectLimpiezaEj = () => {
    const [width,setWidth] = useState(0);

useEffect(() => {
    const currentWitdth = () => {
      const width = document.body.clientWidth;
      console.log(`Este es el currenWidth ${width}`);
          setWidth(width);

    }
    currentWitdth();
    window.addEventListener("resize", currentWitdth)
    return() =>{
        window.removeEventListener("resize", currentWitdth)
    }
  
  }, [])
  


return (
  <div>
   <h1>UseEffectLimpiezaEj</h1>
   <hr/>
   <h3>Anchura: {width} px</h3>
  </div>
)

}
