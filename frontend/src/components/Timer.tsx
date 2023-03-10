import { useEffect, useState } from "react";

export default function Timer({max} : {max : number;}) {
    const [counter, setCounter] = useState(max);

    useEffect(() =>{
        if(counter > 0){
            setTimeout(()=>setCounter(counter - 1), 1000);
        }
    },[counter]);

    return(
        <span>
            {counter}
        </span>
    )
}