import logo from './logo.svg';
//import './App.css';
import Firstchart from './components/Firstchart';
import Sidenav from './components/Sidenav';
import A1db from './components/A1db';
import A5db from './components/A5db';
import N117db from './components/N117db';
import Ic2db from './components/Ic2db';
import Ic16db from './components/Ic16db';

function App() {
  return (
    <> 
    <div className="">
      
       {/* <Sidenav/> */}
      <Firstchart/>
      <A1db/>
      <A5db/>
      <N117db/>
      <Ic2db/>
      <Ic16db/>
   
  </div>
    </>
    
  );
}

export default App;
