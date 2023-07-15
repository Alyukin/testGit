import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [time, setTime] = useState(Date());
    useEffect(()=>{
      setInterval(() => {
        setTime(new Date())
      }, 1000);
    })

  return (
    <div>
      <p>{time.toString()}</p>
    </div>
  )
}
