import Playlist from './playlist';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <div className="card">
        <h1 className="header">Chill & Code Playlist</h1>
          <Playlist></Playlist>
        </div>
      </div>
    </div>
  );
}

export default App;
