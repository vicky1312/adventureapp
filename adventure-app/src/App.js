import './App.css';
import Main from './main.js'
import './fonts/Inter-Medium.ttf'
import './fonts/Inter-Regular.ttf'
import './fonts/Inter-SemiBold.ttf'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-Regular.ttf'
import './fonts/Poppins-SemiBold.ttf'
import './fonts/Poppins-Bold.ttf'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/'>
        <Route index element = {<Main />}/>
      </Route>
    </Routes>
   </Router>
  )
}

export default App;
