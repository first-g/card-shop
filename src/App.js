import React, {useState} from 'react';
import './App.css';
import RenderCard from './components/RenderCard';
import { dataProduct } from './data/data';

function App() {
  let [items, setItems] = useState(dataProduct);

  return (
    <div className="App">
      <div className='container'>
        <div className='app__body'>
          <div className='app__header'>
            <h1>Shopping cart</h1>
            <button onClick={() => setItems(items=[])}>Remove all</button>
          </div>
          <RenderCard items={items} setItems={setItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
