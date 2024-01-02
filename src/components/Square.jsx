
export default function Square({value,handleCick}){
    // const [value,setValue]=useState(null)
  
    return (   
       <>
        <button className="square"
        onClick={handleCick}
        >{value}
        </button>
       </>
      )
 
}