
import {useState} from 'react'
export default function Counter()
{
    const [count, setCount] = useState(0);
    function HandleIncrement(){
        setCount(count =>count + 1)
        console.log(count)
    }
    function HandleDecrement(){
        if(count > 0){
        setCount(count=>count - 1)
        count--;
        }
        else {
            alert("COUNT IS ZERO, CAN'T BE NEGATIVE")
        }
    }
    return(
        <div className =" div2">
        <h1>Counter App</h1>
        <h3 className='count'>{count}</h3>
        <button  className="B1" onClick={HandleIncrement}> + </button>
        <button className="B2" onClick={HandleDecrement}> - </button>

        </div>
    )
}