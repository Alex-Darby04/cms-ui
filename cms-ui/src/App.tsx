import {Routes, Route,  } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import TicketHomePage from './pages/TicketHomePage';


function App() {
  return (
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='ticket'>
          <Route element={<Layout/>}>
            <Route index element={<TicketHomePage/>}/>
          </Route>
        </Route>
      </Routes>
  )
}

export default App