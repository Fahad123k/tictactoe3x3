import { useState } from "react"
import Square from "./Square"
export default function Board(){
    const [value,setValue]=useState(Array(9).fill(null))
    const [xIsNext,setXIsNest]=useState(true);
    

    function checkWinner(value){
        const winnerPosibilities=[
            // horizontal winner
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
    
        ];
        for (let i = 0; i < winnerPosibilities.length; i++) {
            const [a,b,c] = winnerPosibilities[i];
            if(value[a] && value[a]===value[b] && value[a]==value[c]){
                return value[a];
            }
            return null
        }
    }

    const state={x:"x",o:"o"}
 
    function handleCick(i){
        if(value[i] || checkWinner(value)){
            return;
        }
      
        const nexValue=value.slice();
        if(xIsNext){
            nexValue[i]=state.x
        }
        else{
            nexValue[i]=state.o
        }
       setValue(nexValue);
       setXIsNest(!xIsNext);
       
        }

        const winner=checkWinner(value);
        let status;
        if(winner){
            status="winner :"+winner;
        }
        else{
            status="Next Player:"+(xIsNext?"X":"O");
        }

        function resetGame(){
            const confirm=prompt("Confirm Reset 'Y' No")
            setValue(Array(9).fill(null))
        }
        
    return <>

<div>{status}</div>
    <div className="row">
    <Square value={value[0]} handleCick={()=>handleCick(0)}/>
    <Square value={value[1]} handleCick={()=>handleCick(1)}/>
    <Square value={value[2]} handleCick={()=>handleCick(2)}/>
    </div>
    <div className="row">
    <Square value={value[3]} handleCick={()=>handleCick(3)}/>
    <Square value={value[4]} handleCick={()=>handleCick(4)}/>
    <Square value={value[5]} handleCick={()=>handleCick(5)}/>
    </div>
    <div className="row">
    <Square value={value[6]} handleCick={()=>handleCick(6)}/>
    <Square value={value[7]} handleCick={()=>handleCick(7)}/>
    <Square value={value[8]} handleCick={()=>handleCick(8)}/>
    </div>

    <div className="Reset"><button onClick={resetGame}>Reset Game</button></div>
 
    </>
}