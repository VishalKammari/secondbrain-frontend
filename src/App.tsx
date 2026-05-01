import Button from '../components/Button'
import Plusicon from '../components/icons/Plusicon'
import Shareicon from '../components/icons/Shareicon'
import Card from '../components/Card'
import CreateModel from '../components/CreateModel'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const[modelOpen, setModelOpen] = useState(false);
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

