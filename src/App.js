import './App.css';
import Restaurant from './components/Containers/Restaurant';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Restaurant/>
    </BrowserRouter>
  );
}

export default App;
