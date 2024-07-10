import React, { useEffect, useState } from 'react'

function TestUseEffect() {
    //  mainly use effect use to identify the use state changes and do or run method/function 

    const [testUseState, setTestUseState] = useState(1);
    const [count, setCount] = useState(0);
    const [click, setClick] = useState(0);
    const [post, setPost] = useState([]);

    const handleOnclick = () => {
        setTestUseState(5);
    }

    const handlePlusOnclick = () => {
        setCount(count + 1);
    }

    const handleMinusOnclick = () => {
        setCount(count - 1);
    }

    //useEffect
    useEffect(() => {
      console.log("hi");

    }, [count]/*dependency array*/)

    useEffect(() => {
      document.title = `You Clicked ${click} times.`;
    }, [count]);
    
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
            console.log(users);
            setPost(users);
        });
    }, [])
    


  return (
    <div>
      <button onClick={handleOnclick}>Click Me</button>
      <p>{testUseState}</p>

      <br />
      <h2>Counter</h2>
      <button onClick={handleMinusOnclick}>-</button>
      <button onClick={handlePlusOnclick}>+</button>
      <p>{count}</p>

      <br />
      <p>You clicked {click} times.</p>
      <button onClick={() => setClick(click + 1)}>Click Me</button>


      <br />
      <ul className='prod_list' style={{color:'black', paddingLeft: "20px"}}>
        {
            post && post.map((post) => 
            <li key={post.id} style={{listStyleType: "circle"}}>
                {post.username}
            </li>
            )
        }
      </ul>
    </div>
  )
}

export default TestUseEffect
