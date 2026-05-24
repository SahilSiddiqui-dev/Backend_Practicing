function StreakCard({ streak }) {
  return (
    <div className="streak-section">
        <div className="streak-card">
            <h2>Current Streak </h2>
            <div className="streak-number"> {streak} </div>
            <p>days in a row</p>
        </div>
    </div>
  )
}

export default StreakCard
