function ActivityHistory({ activities, onReset }) {
  // TODO: Get latest 5 activities using slice(0, 5)
  // const latestActivities = ?
    const latestActivities = activities.slice(0,5);
  return (
    // TODO: Outer div className="history-section"

    <div className ="history-section">
        <div className="history-header">
            <h3>Latest Activities</h3>
            <button className="reset-btn" onClick={onReset}>
              🔄 Reset All
            </button>
        </div>
    { latestActivities.length === 0 ? (
        <p className="empty-state">No activities logged yet. Start tracking!</p>
    ) : <ul className="activities-list">
        {latestActivities.map((activity) => (
            <li key={activity.id} className="activity-item">
                <span className="activity-name">{activity.name}</span>
                <span className="activity-time">{activity.timestamp}</span>
            </li>
        ))}
        
        </ul>
    
    }
    </div>
    
  )
}

export default ActivityHistory

