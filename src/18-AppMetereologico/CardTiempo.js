import React, { useState } from 'react'

export const CardTiempo = ({infoFinal}) => {

    console.log(infoFinal);

    const {title:ciudad, consolidated_weather:pronostico}= infoFinal;

    const [diaActual, setDiaActual] = useState({
        fecha: pronostico[0].applicable_date,
        icono: pronostico[0].weather_state_abbr,

    })

  return (
    <div>
        <p>fecha:{diaActual.fecha}</p>
        <img src={`https://www.metaweather.com/static/img/weather/png/64/${diaActual.icono}.png`}/>
    </div>
  )
}
