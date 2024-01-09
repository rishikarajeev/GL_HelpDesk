import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>

<Route path='/login' element={<LoginPage/>}></Route>
</BrowserRouter>
  );
}

export default App;
