import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { routs } from './Routs/Routs';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
         <RouterProvider router={routs}/>
    </div>
  );
}

export default App;
