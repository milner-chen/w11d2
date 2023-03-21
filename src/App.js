// import Clock, { ClockToggle } from './components/Clock';
import ClockFunc, { ClockToggle } from './components/ClockFunc';
// import Folder from './components/Folder';
import FolderFunc from './components/FolderFunc';
// import Weather from './components/Weather';
import WeatherFunc from './components/WeatherFunc';
import Autocomplete from './components/Autocomplete';
import { useState } from 'react';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

function App() {
  
  const [showClock, setShowClock] = useState(true);
  
  const toggleClock = () => setShowClock((prevClock) => !prevClock);

    return (
      <div className="widgets">
        <FolderFunc folders={folders} />
        <WeatherFunc />
        <ClockToggle toggleClock={toggleClock} />
        {showClock && <ClockFunc />}
        <Autocomplete names={names} />
      </div>
    );
  }


export default App;