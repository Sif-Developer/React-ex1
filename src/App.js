
import './App.css';
import Person from './components/Person/Person';


// const Person = [
//   {
//     name: "Juan",
//     surname: "Alameda",
//     age: "92"
//   },
//   {
//     name: "Ronda",
//     surname: "Manuela",
//     age: "28"
//   },
//   {
//     name: "Elizabeth",
//     surname: "Ulbricht",
//     age: "36"
//   },
//   {
//     name: "Manuel",
//     surname: "Granados",
//     age: "67"
//   }
// ]


function App() {
  return (
    <div>
      <h1>Hola!</h1>
      <Person Name="Pedro" Surname="Julianes" Age="19"/>
      <Person Name="Amanda" Surname="Lorenzo" Age="28"/>
      <Person Name="Gonzalez" Surname="Locura" Age="93"/>
      <Person Name="Pedro" Surname="Echevarria" Age="12"/>


    </div>
  )
}

export default App;
