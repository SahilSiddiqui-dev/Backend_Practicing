import './App.css'
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
      <h1> User Dashboard </h1>
      <Wrapper title='User list'>
        {user.map((data)=> (<UserCard data={data} />))}
      </Wrapper>
    </>
  )
}

export default App
