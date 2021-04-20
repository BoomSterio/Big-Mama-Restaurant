import './App.css';
import Layout from './components/Layout/Layout'
import React from 'react'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import Modal from './components/common/Modal/Modal'

function App() {
  return (
    <div>
      <Layout>
        <Modal show modalClosed={() => {}}>
          <BurgerBuilder/>
        </Modal>
      </Layout>
    </div>
  );
}

export default App;
