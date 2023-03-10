import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello';
import Hobby from './components/hobbies/Hobby';

function App() {
  return (
    <div className="App">
      <h1>Welcoming Sentence</h1>
      <Hello name="Aibiike" age="45"/>
      <Hobby hobby="swimming and reading"/>
      <Hello name="Arsen" age="25"/>
      <Hobby hobby="writing and running"/>
      <Hello name="Kamila" age="18" />
      <Hobby hobby="coding and playing guitar"/>
    </div>
  );
}

export default App;
 

// CTRl + K + F
//Feature Slice 