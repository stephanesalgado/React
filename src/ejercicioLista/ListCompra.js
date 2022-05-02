import React, { useState } from 'react'
import './listCompra.css'

export const ListCompraApp = () => {

  const [list, setList] = useState([]);

  const [product, setProduct] = useState("");

  const[color, setColor] = useState(true);

  const handleChange = (e)=>{
    const {target} = e
    const{value} = target

    setProduct(value)
  }

  const addProduct =()=>{
    console.log(product);
    setList([product,...list])
    console.log(list);
    setProduct("")
}


  return (
    <div className={color?"claro":"oscuro"}>
      <h1>ListCompraApp</h1>
      <hr/>

      <input
        type="text"
        value={product}
        onChange= {handleChange}
      />
      <button onClick={addProduct}>Añadir Producto</button>
        <h2>La lista de la compra</h2>
        <button onClick={()=>setColor(!color)}>Cambiar color</button>
        <ol>
            {list.map((prod,idx)=>{
                return(<li key={idx}>{prod}</li>)

            })
            
            }
            
        </ol>

    </div>
  )
}
