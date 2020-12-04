import './App.scss';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="container">
    
      <Header />
      <MainContent />
      <Info />
    
    </div>
  );
}

export default App;
