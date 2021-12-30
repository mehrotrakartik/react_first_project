import react from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';


const App = () => {
  return (
    <div className='App'>
      <ClassClick />
      <FunctionClick />
    </div>
  );
}

export default App;
