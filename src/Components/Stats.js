import React, {useEffect, useState} from 'react'

export const Stats = () => {
    const [antal, setAntal] = useState(null)
    const [vunna, setVunna] = useState(null)

    useEffect(() => {
        fetch(`http://ya2home.chickenkiller.com/api/stats`) //fetch(`staticwebserver-service/api/stats`) //fetch(`http://ya2home.chickenkiller.com/api/stats`)
        .then((response) => 
        response.json().then(j=>{
            setAntal(j.totalGames)
            setVunna(j.wins)
        }
            )
        );
    }, []);    

  return (
    <>
    <section className="home" id="products">
            <div>
            <h1 className="heading"> <span>Statistik</span>  </h1>
        
            <a className="ctabutton2" href="#">Totalt antal spel: {antal}</a>
            <a className="ctabutton2" href="#">Totalt antal vunna: {vunna}</a>
            </div>
        </section>
        </>
  )
}
