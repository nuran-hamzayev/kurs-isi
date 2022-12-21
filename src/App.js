import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import './App.css';

// komponentler
import Navbar from './components/Navbar';


function App() {
  return (
    // REACT FRAGMNET
    <div>
    <Navbar />
    </div>
  );
}

export default App;
