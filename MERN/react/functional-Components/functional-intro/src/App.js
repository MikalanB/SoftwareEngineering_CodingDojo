import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCounter from './components/ClassCounter'
import FunctionCounter from './components/FunctionCounter';

function App() {
  return (
    <div className="App">
      <h1><marquee>Hey it's me!</marquee></h1>

      <ClassCounter text="Hey this is a class component!"/>
      <FunctionCounter text="Hey hey"></FunctionCounter>
    </div>
  );
}

export default App;
