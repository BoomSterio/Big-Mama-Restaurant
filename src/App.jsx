import './App.css'
import Layout from './components/Layout/Layout'
import React from 'react'
import { Router } from '@reach/router'
import Menu from './pages/Menu/Menu'

function App() {
  return (
    <div className={'app'}>
      <Layout>
        <Router>
          <Menu exact path={'/'}/>
        </Router>
      </Layout>
    </div>
  )
}

export default App
