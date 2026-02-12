import './App.css'
import { Event } from './components/Event.jsx'
import {Wrapper} from './components/Wrapper'
import { UserCard } from './components/UserCard'
function App() {
  const user = [{
    name: 'virat kohli',
    role: 'batsman',
    team: 'rcb'
  },
  {
    name: 'rohit sharma',
    role: 'batsman',
    team: 'mumbai indians'
  }
  ]
  return (
    <>
     <Event/>
    </>
  )
}

export default App
