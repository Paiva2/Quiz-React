import Quiz from './components/Quiz';
import {GlobalStorage} from './GlobalContext'

function App() {
  return (
    <GlobalStorage>
      <Quiz />
    </GlobalStorage>
  );
}

export default App;
