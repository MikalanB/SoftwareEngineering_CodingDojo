import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './components/PersonCard'
import BigInversion from './components/BigInversion'

function App() {
  return (
    <div className="App">
      <PersonCard firstName = 'Jane' lastName = "Doe" age = {45} hairColor = "Black" ></PersonCard>
      <PersonCard firstName = 'John' lastName = "Smith" age = {88} hairColor = "Brown" ></PersonCard>
      <PersonCard firstName = 'Millard' lastName = "Filmore" age = {50} hairColor = "Brown" ></PersonCard>
      <PersonCard firstName = 'Maria' lastName = "Smith" age = {62} hairColor = "Brown" ></PersonCard>

      <BigInversion firstName = 'Jane' lastName = "Doe" age = {45} hairColor = "Black" ></BigInversion>
      <BigInversion firstName = 'John' lastName = "Smith" age = {88} hairColor = "Brown" ></BigInversion>
      <BigInversion firstName = 'Millard' lastName = "Filmore" age = {50} hairColor = "Brown" ></BigInversion>
      <BigInversion firstName = 'Maria' lastName = "Smith" age = {62} hairColor = "Brown" ></BigInversion>

    </div>
  );
}

export default App;
