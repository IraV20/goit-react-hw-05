// import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation/Navigation'
import HomePage from './pages/homePage/HomePage'
import MowiesPage from './pages/moviesPage/MoviesPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import { getTrendingMovie } from './api'

function App() {
  // const [count, setCount] = useState(0)

  getTrendingMovie();

  return ( 
    <div>
      <Navigation/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MowiesPage/>}/>
        <Route path='*' element={<NotFoundPage/>} />

      </Routes>
      
    </div>
   )
}

export default App
