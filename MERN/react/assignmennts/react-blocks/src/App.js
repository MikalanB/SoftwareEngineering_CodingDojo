import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Container>
          <Navigation />
            <Main>
                <SubContents/>
                <SubContents/>
                <SubContents/>
                <Advertisement/>
            </Main>
        </Container>
    </div>
  );
}

export default App;
