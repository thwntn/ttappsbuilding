import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Background from './component/background/Background';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './component/body/Body';
import Content from './component/content/Content';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Background></Background>
      <Body></Body>
      <Content></Content>
    </div>
  );
}

export default App;
