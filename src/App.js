import './App.css';
import RenderCard from './components/RenderCard';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='app__body'>
          <div className='app__header'>
            <h1>Shopping cart</h1>
            <button>Remove all</button>
          </div>
          <RenderCard />
        </div>
      </div>
    </div>
  );
}

export default App;
