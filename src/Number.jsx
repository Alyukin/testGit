import React, { useEffect, useState } from 'react'

export default function Number() {
    const [number, setNumber] = useState(0);
  return (
    <div>
        <h3 style={{marginTop: 0}}>Count:{number}
        <button
        onClick={()=>{setNumber(number - 1)}}
        >Уменьшить</button>
        <button
        onClick={()=>{setNumber(number + 1)}}
        >Увеличить</button></h3>
    </div>
  )
}
