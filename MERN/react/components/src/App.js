import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from'./components/box';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary">Click me!</button>
      
      <Box text="hey, it's you!" number={42} isDark = {true}/>
      <Box text="This is the second one!" number ={15} isDark = {false}/> 

      <Box text="This is the third one!" number ={25} isDark = {true}>
        <h1>Hey Hey</h1>

      </Box>

    </div>
  );
}

export default App;
