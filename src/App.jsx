import './App.css';
import Layout from './components/Layout/Layout'
import React from 'react'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
