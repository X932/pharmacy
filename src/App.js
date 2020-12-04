import './App.scss';
import Advantages from './components/Advantages/Advantages';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Advantages />
    </div>
  );
}

export default App;
