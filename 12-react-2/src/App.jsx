import { useState } from 'react'

function App() {
  console.log('hello world')

  let hello = "hello!"

  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {hello + "!!!!!"}
      {arr.map(el => (<b>{el}</b>))}
    </>
  )
}

export default App
