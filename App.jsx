import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './compnents/Counter'
import ObjectAsState from './compnents/ObjectAsState'
import ArraysAsState from './compnents/ArraysAsState'
import ConditionallyUseEffect from './compnents/ConditionallyUseEffect'
import UseEffect3 from './compnents/UseEffect3'
import UnmountComponent from './compnents/UnmountComponent'
import FetchApi from './compnents/FetchApi'
import EmployeeTable from './compnents/EmployeeTable'

function App() {

  return (
    <>
      {/* <Counter></Counter> */}
      {/* <ObjectAsState></ObjectAsState> */}
      {/* <ArraysAsState></ArraysAsState> */}
      {/* <ConditionallyUseEffect></ConditionallyUseEffect> */}
      {/* <UseEffect3></UseEffect3> */}
      {/* <UnmountComponent/> */}
      {/* <FetchApi/> */}
      <EmployeeTable/>
    </>
  )
}

export default App
