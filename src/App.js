import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar Title="Textutils" firstcomponent ="HOME" />
    <div className="container my-3">
    <Textform heading="Enter the text u want to analyze"/>
    </div>
    </>
  );
}

export default App;
