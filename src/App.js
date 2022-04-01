import './App.css';
import Basics from './components/Basics';
import Evidence from './components/Evidence';
import ExplanationIntro from './components/ExplanationIntro';
import Intro from './components/Intro';
import Conclusion from './components/Conclusion';
function App() {
  return (
    <div>
      <Intro />
      <hr></hr>
      <Basics />
      <hr></hr>
      <ExplanationIntro />
      <hr></hr>
      <Evidence />
      <hr></hr>
      <Conclusion />
    </div>
  );
}

export default App;
