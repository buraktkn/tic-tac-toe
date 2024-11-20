import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
import Board from './components/Board'
function App() {
  return (
    <div className="App">
      {/*
      <h1>Arttırıp Azaltma Butonu</h1>
      <Button/>
      <h1>Ayrı olarak değişen butonlar</h1>
      <Button2/>
      <Button2/>
      <h1>Aynı değişen butonlar</h1>
      <Button3/>
      */}
      <Board/>
    </div>
  );
}

export default App;
