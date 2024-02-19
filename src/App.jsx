import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './homepage/HomePage';
import { BookRegistration } from './BookRegistration/BookRegistration';
import { BookComments } from './BookComments/BookComments';
import './App.css';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<BookRegistration />} />
          <Route path="/comments" element={<BookComments />} />
        </Routes>
      </div>
    </>
  )
}

export default App
