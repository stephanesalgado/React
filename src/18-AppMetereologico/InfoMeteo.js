import axios from 'axios'
import React, { useState } from 'react'
import { CardTiempo } from './CardTiempo'
import './infometeo.scss'


export const InfoMeteo = () => {

    const [city, setCity] = useState("")

    const [infoFinal, setInfoFinal] = useState(null)

    const handleSubmit = (e) => {

        e.preventDefault();

        axios
            .get(`https://www.metaweather.com/api/location/search/?query=${city}`)
            .then((res)=>{
                console.log(res.data);

                if(res.data.lenght === 0){
                    setCity('')
                }else{
                    obtenerInformacion(res.data[0].woeid)
                }
            })
    }


    const obtenerInformacion= (cityId) => {

        axios
            .get(`https://www.metaweather.com/api/location/${cityId}`)
            .then ((res) => {
                console.log(res);
                setInfoFinal(res.data);
            })

    }

  return (

    <div className='general'>
        <h1>InfoMeteo</h1>
        <hr/>
        <form>
            <h3>Buscar Ciudad</h3>
            <input
                type="text"
                placeholder='Introduce ciudad'
                autoComplete='off'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button 
                type='submit'
                onClick={handleSubmit}
            >Buscar</button>
        </form>

        <div className='miContenedor'>
            {infoFinal != null && <CardTiempo infoFinal = {infoFinal}/>}
        </div>


    </div>
  )
}
