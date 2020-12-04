import './App.scss';
import Advantages from './components/Advantages/Advantages';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="container">
    
      <Header />
      <MainContent />
      <Info />
      <Advantages />
    
    </div>
  );
}

export default App;
