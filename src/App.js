import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import Nav from './components/Nav/Nav.jsx'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <Nav/>

      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
