import {Routes, Route, } from 'react-router-dom';
import './App.css'
import LoginPage from './components/LoginPage';
import Layout from './components/Layout';

function App() {
  return (
      <Routes>
        <Route path = "/" element={<Layout/>}/>
        <Route index element={<LoginPage/>}/>
        
      </Routes>
  )
}

export default App