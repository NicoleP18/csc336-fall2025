import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import { useState, useEffect } from 'react'

function App() {

  console.log('hello world');

  useEffect(()=> {
    

  }, []);

  let hello = "hello!";

  let arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {hello + "!!!!!"}
      {arr.map(el => (<b>{el}</b>))}
    </>
  )
}

export default App
