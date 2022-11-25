import logo from './logo.svg';
import './App.css';
import { BeakerIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="App">
      <div>
        <BeakerIcon className="h-6 w-6 text-blue-500" />
        <p>...</p>
      </div>
      <button className="btn btn-active">Button</button>
      <button className="btn btn-active btn-primary">Button</button>
      <button className="btn btn-active btn-secondary">Button</button>
      <button className="btn btn-active btn-accent">Button</button>
      <button className="btn btn-active btn-ghost">Button</button>
      <button className="btn btn-active btn-link">Button</button>
    </div>
  );
}

export default App;
