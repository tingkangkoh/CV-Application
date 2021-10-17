
import './App.css';
import GeneralInformation from "./GeneralInformation.js"
import Experience from "./Experience"
import Education from "./Education"
function App() {
  return (
    <div className="App">
      <header>
        <h1>CV-Application</h1>
      </header>
      <GeneralInformation/>
      <Experience/>
      <Education/>
      
    </div>
  );
}

export default App;
