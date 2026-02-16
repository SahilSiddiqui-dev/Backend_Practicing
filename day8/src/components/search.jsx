import { useState } from "react";
export default function Search(){

    const [find, setSearch] = useState("");
    const name=['denis', 'ritchie', 'paul', 'frank'];

    const student = name.filter()
    return(
        <>
            <h2>Demo to show search</h2>
            <input type="text" 
            placeholder='Enter the key to search'
            value={find}
            onChange={(e) => setFind(e.target.value)}/>
        </>
    )
}