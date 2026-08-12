# COMPONENT ARCHITECTURE GUIDE - LifeSync Wellness Tracker

## 🎯 THE BIG PICTURE

Your app structure looks like this:

```
App.jsx (Parent/Container Component)
│
├── Header.jsx (displays title)
├── StreakCard.jsx (displays streak number)
├── WellnessTip.jsx (displays random tip)
├── ActivityButtons.jsx (5 buttons to log activities)
└── ActivityHistory.jsx (shows latest 5 activities + reset button)
```

---

## 📊 HOW DATA FLOWS (Props Down, Functions Up)

```
App.jsx STATE:
  - streak = 5
  - activities = [...]
  - wellnessTip = "Drink water"

           ↓ (passes down via props)

<StreakCard streak={5} />
<WellnessTip tip="Drink water" />
<ActivityButtons onTrack={trackActivity} />
<ActivityHistory activities={[...]} onReset={resetTracker} />

           ↓ (child components call functions)

User clicks button → ActivityButtons calls onTrack()
                  → App.jsx updates state
                  → All components re-render with new data
```

---

## 🛠️ STEP-BY-STEP BUILDING GUIDE

### STEP 1: Build Header.jsx
**What it does:** Shows title

**Questions to answer:**
- What JSX tag should it return? `<header>`
- What's inside? `<h1>` and `<p>`
- Does it receive props? No

**Your task:** Fill in the component template

---

### STEP 2: Build StreakCard.jsx
**What it does:** Display the streak number (e.g., "5 days")

**Questions to answer:**
- What prop does it receive? `streak` (a number)
- How do I use the prop? `{streak}` in JSX
- What classes for styling? Check App.css

**Your task:** Use the `streak` prop to show the number

---

### STEP 3: Build WellnessTip.jsx
**What it does:** Show a wellness tip

**Questions to answer:**
- What prop does it receive? `tip` (a string)
- How do I display it? Put it in `<p>{tip}</p>`
- Will it change? Yes, after each activity

**Your task:** Display the `tip` prop

---

### STEP 4: Build ActivityButtons.jsx
**HARDEST ONE - Read carefully**

**What it does:** Create 5 buttons

**Buttons:**
```javascript
// POSITIVE (green)
<button className="btn btn-positive" onClick={() => onTrack('MEDITATION')}>
  🧘 Meditation
</button>

// NEGATIVE (red)
<button className="btn btn-negative" onClick={() => onTrack('OVERSLEPT')}>
  😴 Overslept
</button>
```

**Key concepts:**
- `onClick={() => onTrack('KEY')}` - Arrow function needed because we need to pass parameter
- `className="btn btn-positive"` - Two classes: `btn` (base style) + `btn-positive` (color)
- When user clicks → calls `onTrack()` function from App.jsx

**Your task:** Create all 5 buttons using the pattern above

---

### STEP 5: Build ActivityHistory.jsx
**SECOND HARDEST - This has conditional rendering**

**What it does:** Show latest 5 activities OR empty message

**Logic:**
```javascript
if (activities.length === 0) {
  // Show empty message
} else {
  // Show list of activities
}
```

**How to show list:**
```javascript
activities.slice(0, 5).map((activity) => (
  <li key={activity.id}>
    <span>{activity.name}</span>
    <span>{activity.timestamp}</span>
  </li>
))
```

**Your task:** Implement conditional rendering + map() loop

---

## 🔧 STEP 6: Fill App.jsx (The Brain)

**App.jsx needs:**

1. **State (useState)**
   ```javascript
   const [streak, setStreak] = useState(0)
   const [activities, setActivities] = useState([])
   const [wellnessTip, setWellnessTip] = useState('')
   ```

2. **Wellness Tips Array**
   ```javascript
   const wellnessTips = [
     '🧘 Meditation...',
     '💪 Exercise...',
     // ... more tips
   ]
   ```

3. **Activity Types Object**
   ```javascript
   const activityTypes = {
     MEDITATION: { name: 'Meditation', positive: true },
     EXERCISE: { name: 'Exercise', positive: true },
     READING: { name: 'Reading', positive: true },
     OVERSLEPT: { name: 'Overslept', positive: false },
     SKIPPED_ROUTINE: { name: 'Skipped Routine', positive: false }
   }
   ```

4. **useEffect (show random tip on load)**
   ```javascript
   useEffect(() => {
     const randomIndex = Math.floor(Math.random() * wellnessTips.length)
     setWellnessTip(wellnessTips[randomIndex])
   }, [])
   ```

5. **trackActivity() function**
   - Get activity details from activityTypes
   - Create object: `{ name, timestamp: new Date().toLocaleString(), id: Date.now() }`
   - Add to array: `setActivities([newActivity, ...activities])`
   - If positive: `setStreak(streak + 1)`
   - If negative: `setStreak(0)`
   - Get new random tip

6. **resetTracker() function**
   - `setStreak(0)`
   - `setActivities([])`
   - `setWellnessTip(newRandomTip)`

7. **Import and render all components**
   ```javascript
   import Header from './components/Header'
   import StreakCard from './components/StreakCard'
   // ...
   
   <Header />
   <StreakCard streak={streak} />
   <WellnessTip tip={wellnessTip} />
   <ActivityButtons onTrack={trackActivity} />
   <ActivityHistory activities={activities} onReset={resetTracker} />
   ```

---

## 📝 EXAM KNOWLEDGE QUESTIONS

**Q: Why split into components?**
A: Reusability, readability, easier testing, cleaner code

**Q: How does ActivityButtons know what to do?**
A: It receives `onTrack` function as prop, calls it when user clicks

**Q: How does ActivityHistory show latest activities?**
A: Uses `.slice(0, 5).map()` to convert array to JSX

**Q: Why is App.jsx the parent?**
A: It holds ALL state. Children are "dumb" - only display and handle clicks

**Q: What's the difference between props and state?**
A: Props = data from parent (read-only), State = data managed by component (can change)

---

## ✅ TESTING WHEN DONE

1. Click "Meditation" → Streak increases ✅
2. Click "Overslept" → Streak resets to 0 ✅
3. Each click shows new activity in history ✅
4. Each click shows new wellness tip ✅
5. "Reset All" clears everything ✅
6. Latest 5 activities show with timestamps ✅

---

## 🚨 COMMON MISTAKES TO AVOID

❌ Forgetting to import components in App.jsx
❌ Forgetting `export default` in component files
❌ Forgetting curly braces in `onClick={() => onTrack(...)}`
❌ Not using `.slice(0, 5)` for latest activities
❌ Forgetting `key={activity.id}` in .map()
❌ Using wrong className (btn vs btn-positive)

---

**Start with Header.jsx - it's the easiest!**
Then work your way up to ActivityHistory.jsx - the hardest.

Let me know when you finish each component! 🚀
