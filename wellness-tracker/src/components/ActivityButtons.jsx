function ActivityButtons({ onTrack }) {
  return (
    <div className="buttons-section">
        <h3>Log Your Activity</h3>
        <div className = "button-grid">
            <button className ="btn btn-positive" onClick={() => onTrack('MEDITATION')}>🧘 Meditation</button>
            <button className ="btn btn-positive" onClick={() => onTrack('EXERCISE')}>💪 Exercise</button>
            <button className ="btn btn-positive" onClick={() => onTrack('READING')}>📚 Reading</button>
            <button className ="btn btn-negative" onClick={() => onTrack('OVERSLEPT')}>😴 Overslept</button>
            <button className ="btn btn-negative" onClick={() => onTrack('SKIPPED_ROUTINE')}>⏭️ Skipped Routine</button>
        </div>
    </div>    
  )
}
export default ActivityButtons
