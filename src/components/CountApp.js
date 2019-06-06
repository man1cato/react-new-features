import React, { useState, useEffect } from 'react'

const CountApp = (props) => {
   const [count, setCount] = useState(props.count)
   const [text, setText] = useState('')
   
   useEffect(() => {
      console.log('this should run once')
   }, [])

   useEffect(() => {
      document.title = count
      console.log('this should run whenever the count changes')
   }, [count])

   return (
      <div>
         <p>The current {text || 'count'} is {count}</p>
         <button onClick={() => setCount(count - 1)}>-1</button>
         <button onClick={() => setCount(props.count)}>Reset</button>
         <button onClick={() => setCount(count + 1)}>+1</button>
         <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
   )
}

export default CountApp