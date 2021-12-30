import react from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';


const App = () => {
  return (
    <div className='App'>     
      <Welcome name="Kartik Mehrotra" />
    </div>
  );
}

export default App;
