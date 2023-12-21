import './App.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import SearchPage from './Components/SearchPage'
import PersonPage from './Components/PersonPage'
import Navbar from './Components/Navbar'
import LangContext from './LangContext'
import useLangStorage from './useLangStorage'

function App() {

  const [lang, setLang] = useLangStorage('en-US');

  return (<>

    <LangContext.Provider value={lang}>
      <Navbar
        handleChange = {newValue => setLang(newValue)}
        langValue={lang}
      />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/person'>
          <Route index element={<PersonPage/>}/>
          <Route path=':id' element={<PersonPage/>}/>
        </Route>

      </Routes>
    </LangContext.Provider>
  </>)
}

export default App
