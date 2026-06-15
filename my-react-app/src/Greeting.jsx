import { useState } from 'react';
const Greeting = ()=>{
    const[name,setName] = useState('');//入力された名前を保存するための箱を作っている

    const handleClick=()=>{
        alert(`Hello, "${name}" !`);
    }

    return(
        <div>
            <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="名前を入力"
            />

            <button onClick={handleClick}>挨拶する</button>
        </div>
    );
};

export default Greeting;