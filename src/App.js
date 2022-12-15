import './App.css';
import index1 from './template1';
import index2 from './template2';

function App() {
  return <div>
    {index1()}
    {index2()}
  </div>
}

export default App;
