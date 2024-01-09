import React,  {useState} from "react";

const Counter = () =>{
    const [newcounter,setnewcounter] = useState(0);

    const handPlus =()=>{
        setnewcounter(newcounter +1);
    }

    const handMinus= () =>{
        setnewcounter(newcounter -1);
    }

    return (
        <div>
            <div>
                <p>
                    {newcounter}
                </p>
            </div>
            <div>
                <button onClick={handPlus}>+</button>
                <button onClick={handMinus}>-</button>
            </div>
        </div>
    )
}

export default Counter;
