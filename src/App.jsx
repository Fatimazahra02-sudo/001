import './App.css'
import InfosPerso from './components/InfosPerso'
import Experiences from './components/Experiences'
import Competences from './components/Competences'

function App() {
  return (
    <div className="CV">
      <InfosPerso />
      <Experiences />
      <Competences />
    </div>
  )
}

export default App
