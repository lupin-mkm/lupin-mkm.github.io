import 'reset-css'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Work } from './components/Work'
import { Feature } from './components/Feature'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Work />
      <Feature />
      <About />
      <Contact />
    </>
  )
}

export default App;
