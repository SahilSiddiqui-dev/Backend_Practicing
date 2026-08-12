/**
 * WellnessTip.jsx Component
 * 
 * PURPOSE: Display a wellness tip
 * 
 * PROPS:
 *   - tip (string): Single wellness tip from App.jsx
 * 
 * USAGE in App.jsx:
 * <WellnessTip tip={wellnessTip} />
 */

function WellnessTip({ tip }) {
  return (
    <div className="tip-section">
        <div className="wellness-tip"> 
            <p>{tip}</p>
        </div>
    </div>
  )
}

export default WellnessTip
