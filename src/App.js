import './App.css';
import Hello from './components/Hello/Hello';
import Hobby from './components/Hobby/Hobby';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hello name="Aibiike" age="45"/>
      <Hobby hobby="swimming and reading"/>
      <Hello name="Arsen" age="25"/>
      <Hobby hobby="writing and running"/>
      <Hello name="Kamila" age="18" />
      <Hobby hobby="coding and playing guitar"/>
      <Footer/>
    </div>
  );
}

export default App;
 

// CTRl + K + F
//Feature Slice 

// Декомпозиция - это разделения 