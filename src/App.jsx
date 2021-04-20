import './App.css'
import Layout from './components/Layout/Layout'
import React from 'react'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import Modal from './components/common/Modal/Modal'
import { Router } from '@reach/router'
import Menu from './pages/Menu/Menu'

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Menu path={'/'}/>
        </Router>
      </Layout>
    </div>
  )
}

export default App
