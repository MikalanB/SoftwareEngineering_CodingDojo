import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1><marquee>Hey, it's me. mikalan bitch</marquee></h1>

      <Counter text="hey, I'm the component here!"></Counter>

      <Counter text="clicket yon here"></Counter>
      
      <Counter text="ye olde javaescripte"></Counter>
    </div>
  );
}

export default App;
