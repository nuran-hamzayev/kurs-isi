import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import './App.css';



// komponentler
import Navbar from './components/Navbar';


function App() {
const say1 = document.querySelector('.aboutnumber_two')
var timer;
function saygac1() {
    var sec = 0;
    timer = setInterval(() => {
        if (sec < 19) {
            say1.innerHTML = sec + "+"
            sec++
        }
    }, 1000);
}
saygac1()


const say3 = document.querySelector('.aboutnumber')

function saygac3() {
    var sec = 0;
    timer = setInterval(() => {
        if (sec < 8000000001) {
            say3.innerHTML = sec + "+"
            sec++
        }
    }, 50);
}
saygac3()



  return (
    // REACT FRAGMNET
    <div>
    <Navbar />
    </div>
  );
}

export default App;
