import { Router } from '@reach/router';
import { Home } from './components/Home';
import { ShowNumber } from './components/ShowNumber';
import { ShowWord } from './components/ShowWord';
import { WithStyle } from './components/WithStyle';

function App() {
  return (
    <div className="main">
        <Router>
            <Home path="/home"/>
            <ShowNumber path="/:number" />
            <ShowWord path="/:word" />
            <WithStyle path="/:word/:fontColor/:backgroundColor" />
        </Router>
    </div>
  );
}

export default App;
