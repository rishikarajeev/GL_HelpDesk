import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Sidebar/>
<BrowserRouter>
<Routes>
<Route path='/showtickets' element={<ViewTickets/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
