import logo from './logo.svg';
//import './App.css';
import Firstchart from './components/Firstchart';
import Sidenav from './components/Sidenav';
import A1db from './components/A1db';
import A5db from './components/A5db';

function App() {
  return (
    <> 
    <div className="">
      
       {/* <Sidenav/> */}
      <Firstchart/>
      <A1db/>
      <A5db/>
   
  </div>
    </>
    
  );
}

export default App;
