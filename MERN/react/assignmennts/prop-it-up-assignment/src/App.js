import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName = 'Jane' lastName = "Doe" age = '45' hairColor = "Black" ></PersonCard>
      <PersonCard firstName = 'John' lastName = "Smith" age = '88' hairColor = "Brown" ></PersonCard>
      <PersonCard firstName = 'Millard' lastName = "Filmore" age = '50' hairColor = "Brown" ></PersonCard>
      <PersonCard firstName = 'Maria' lastName = "Smith" age = '62' hairColor = "Brown" ></PersonCard>

    </div>
  );
}

export default App;
