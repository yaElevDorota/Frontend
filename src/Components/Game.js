import React, {useEffect, useState} from 'react'

export const Game = () => {
    const [activeAction, setActiveAction] = useState('ShowSelection');
    const [selected, setSelected] = useState('');
    const [computerSelection, setComputerSelection] = useState(null)
    const [winner, setWinner] = useState(null)
    const [message, setMessage] = useState(null)

    const PlayAgain = () =>{
        setWinner(null)
        setComputerSelection(null)
        setSelected("")
        setActiveAction("ShowSelection")
    }
    
    const SetSelection = async (sel) =>{
        setSelected(sel)
        setActiveAction('Sending')
        let id = sel.toUpperCase()                
        const data = await (await fetch(`http://ya2home.chickenkiller.com/api/play?yourSelection=${id}`)).json()
        //const data = await (await fetch(`staticwebserver-service/api/play?yourSelection=${id}`)).json()
        
        //setResultat(data)
        console.log(data.computerSelection)
        setComputerSelection(data.computerSelection)
        setWinner(data.winner)
        setMessage(data.message)
}

  return (
    <>
    <section className="home" id="products">
        { activeAction == "ShowSelection" &&
            <div>
            <h1 className="heading"> <span>Make your</span> selection </h1>
        
            <a onClick={()=>SetSelection("Stone")} className="ctabutton" href="#">Stone</a>
            <a onClick={()=>SetSelection("Scissor")} className="ctabutton" href="#">Scissor</a>
            <a onClick={()=>SetSelection("Bag")} className="ctabutton" href="#">Bag</a>
            </div>
        }
        { activeAction == "Sending" &&
            <div>
            <h2 >Your choice:</h2>
            <a className="ctabutton2" href="#">{selected}</a>
            <h2>Computer selected</h2>
            
            <h2>
            {computerSelection &&                 
            <a className="ctabutton2" href="#">{computerSelection}</a>
            }
            </h2>
            {winner &&                 
            <>
            <h2>The winner is:  {winner}</h2>
            <a onClick={()=>PlayAgain()} className="ctabutton" href="#">Play again</a>
            </>
            }
           

            
            
            </div>
        }



        
        </section>
        </>
  )
}
