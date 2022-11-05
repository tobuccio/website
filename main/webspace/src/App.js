import './App.css';

const Person = () => {
  return (
    <>
      <h1> name : fart</h1>
      <h2> last : ball </h2>
      <h2> age : 30 </h2>
    </>
  )
}
const App = () => {
  const name = "test";
  const isName = false;
  return (
    <div className="App">
    <Person />
    <h1> Main Page Three Buttons </h1>
    </div>
  );
}

export default App;
