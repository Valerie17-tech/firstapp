import React from 'react'
import Head from './components/Head'
import Foot from './components/Foot'
import Bod from './components/Bod'
import Greet from './components/Greet';
import Test from './components/Test'

function App () {
  return (
    <>
      <Head />
      <Bod />
      <Foot />
      <Greet name="Valerie"/>
      <Test />
    </>
  );
}

export default App;
