import { useState } from "react"
import DisplayCounter from "./DisplayCounter";
function Count(props){
    const [count, setCount] = useState(props.init)
    useState(() =>{
        const num = setInterval(() => {
            setCount((el) => el + props.inc)
        },props.interval);
        return() =>{
            clearInterval(num)
        }
    })
    return(
        <DisplayCounter count ={count}/>
    )
}

export default Count