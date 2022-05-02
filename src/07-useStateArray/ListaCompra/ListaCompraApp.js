import React, { useState } from 'react'

export const ListaCompraApp = () => {

    const [list, setList] = useState([]);

    const [product, setProduct] = useState("");

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
    <div>
    
        <h1>ListaCompraApp</h1>
        <hr/>
        <h2>{list}</h2>

        <input
            type="text"
            value={product}
            onChange={handleChange}

        />
        <button onClick={addProduct}>Añadir Producto</button>
        <h2>la superLista</h2>
        <ol>
            {list.map((prod,idx)=>{
                return(<li key={idx}>{prod}</li>)

            })
            
            }
            
        </ol>
       
        
    </div>
  )
}
