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

function App() {
  const[modelOpen, setModelOpen] = useState(false);
  return (
    <div>
      <Signup />
    </div>
  )
}

export default App

