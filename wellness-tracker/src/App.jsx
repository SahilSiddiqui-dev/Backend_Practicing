import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import StreakCard from './components/StreakCard.jsx'
import WellnessTip from './components/WellnessTip.jsx'
import ActivityButtons from './components/ActivityButtons.jsx'
import ActivityHistory from './components/ActivityHistory.jsx'
import './App.css'

function App() {
  const [streak, setStreak] = useState(0)
  const [activities, setActivities] = useState([])
  const [wellnessTip, setWellnessTip] = useState('')

  // WELLNESS TIPS ARRAY
  const wellnessTips = [
    '🧘 Meditation reduces stress by 40% - Try 5 mins daily',
    '💪 Exercise boosts mood within 10 minutes of starting',
    '📚 Reading improves focus and reduces anxiety',
    '😴 Getting 8 hours sleep strengthens your immune system',
    '💧 Drinking water improves energy and concentration',
    '🌿 Nature walks reduce cortisol levels significantly',
    '🍎 Eating healthy food improves mental clarity',
    '🎵 Music therapy reduces heart rate and blood pressure',
    '🧘‍♀️ Deep breathing calms your nervous system instantly',
    '⏰ Consistent routines improve sleep quality by 60%'
  ]

  // ACTIVITY TYPES
  const activityTypes = {
    MEDITATION: { name: 'Meditation', positive: true },
    EXERCISE: { name: 'Exercise', positive: true },
    READING: { name: 'Reading', positive: true },
    OVERSLEPT: { name: 'Overslept', positive: false },
    SKIPPED_ROUTINE: { name: 'Skipped Routine', positive: false }
  }

  // LOAD RANDOM TIP ON MOUNT
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wellnessTips.length)
    setWellnessTip(wellnessTips[randomIndex])
  }, [])

  // TRACK ACTIVITY FUNCTION - YOU BUILD THIS!
  const trackActivity = (activityKey) => {
    const activity = activityTypes[activityKey]

    const newActivity = {
        name: activity.name,
        timestamp: new Date().toLocaleString(),
        id: Date.now()
    }
    setActivities([newActivity, ...activities])

    if (activity.positive) {
        setStreak(streak + 1)
    } else {
        setStreak(0)
    }

    const randomIndex = Math.floor(Math.random() * wellnessTips.length)
    setWellnessTip(wellnessTips[randomIndex])

  }

  function resetTracker(){
    setStreak(0);
    setActivities([]);
    const randomIndex = Math.floor(Math.random() * wellnessTips.length)
    setWellnessTip(wellnessTips[randomIndex])
  }

  return (
    <div className="app-container">
      <Header />
      
      <div className="main-content">
        <StreakCard streak={streak} />
        <WellnessTip tip={wellnessTip} />
        <ActivityButtons onTrack={trackActivity} />
        <ActivityHistory activities={activities} onReset={resetTracker} />
      </div>
    </div>
  )
}

export default App
