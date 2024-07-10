import React, { useEffect, useRef, useState } from 'react'

function TestUseRef() {

    const [input, setInput] = useState("<Input Text goes here>");
    const [count, setCount] = useState(0);

    const handleOnChange = (e) =>{
        if(e.target.value.length == 0){
            setInput("<Input Text goes here>")
        }else{
            setInput(e.target.value)
        }
    }

    const countRef = useRef(0); 
    const inputRef = useRef();
    const inputRef2 = useRef();

    useEffect(() => {
        inputRef.current.style.backgroundColor = "red";
        countRef.current = countRef.current + 1; // useRef use to prevent infinity rendering 
        // setCount((count) => count + 1); // if we use useState then render infinitly
    } );

    const handleClick = () => {
        if(inputRef2.current.value == ""){
            inputRef2.current.focus()
        }
        else if(inputRef2.current.value > 50){
            alert("Success!");
        }else{
            alert("Error!!");
        }
    }

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <p>You have input {input}</p>
      <p>Rendered: {countRef.current}</p>

      <br />
       //How to access dom elements using use ref hook
       <input type="text" ref={inputRef}/>

       <br />
       <br />
       <br />
       <input type="text" ref={inputRef2}/>
       <button onClick={handleClick}> validate</button>
    </div>
  )
}

export default TestUseRef
