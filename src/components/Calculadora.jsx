import { useState } from "react"

export default function Calculadora (){
    const [input, setInput] = useState ("")
    return(
        <>
        <h1>Calculadora</h1>
        <div className="container">
            <div className="tela">
            <p>{input}</p>
            </div> 
       <div>
            <input type="button" value="CE" onClick={e => setInput("")}  />
            <input type="button" value="%" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="DEL" onClick={e => setInput( input.slice(0, -1))} />
            <input type="button" value="/" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="7" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="8" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="9" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="*" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="4" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="5" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="6" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="-" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="1" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="2" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="3" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="+" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="0" onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="." onClick={e => setInput( input + e.target.value)} />
            <input type="button" value="=" onClick={e => setInput(eval(input))} />
        </div>
        </div>
        </>
    )
}