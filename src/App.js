import logo from './logo.svg';
import './App.css';
import ProverkaEmail from './components/proverkaemail';
import TextEditor from './components/texteditor';
import Counter from './components/counter';
import CustomTable from './components/customtable';
import FloatingCube from './animation/FloatingCube'
import FloatingCircle from  './animation/FloatingCircle'
import MergingDrops from './animation/mergingdrops';
import PrimaryFase from './saitRVTK/primaryfase';
import Header from './componentsRVTK/topicon';
import TopIcon from './componentsRVTK/topicon';
import Footer from './componentsRVTK/footer';
import CountLaik from './saitNEWS/countlaik';
import News from './saitNEWS/news';



{/*import News from './saitNEWS/news';*/}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { /*<img src={logo} className="App-logo" alt="logo" />
        {/*<ProverkaEmail />
        <TextEditor />
        <Counter /> */}
        { /*<FloatingCube />
        <FloatingCircle />
        <MergingDrops />
      <CustomTable /> 
        <Header /> 
        <Schedule />
        <Footer />{ЭТО НУЖНО}
        
        <CountLaik />
        <TopIcon/>
        
        <CountLaik />*/ } 
        <News />
        { /*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a> */}
      </header>
    </div>
  );
}

export default App;
