
import './App.css';
import './sidebar.js'
import Sidebar from './sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
