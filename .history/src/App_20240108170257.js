import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path='/showtickets' element={<T/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
