import './App.css';
import Header from './Header';
import Addbook from './Addbook';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookList from './BookList';
import Home from './Home';
import useLocalStorage from './hooks/useLocalStorage';
const App = () => {
  const [books, setBooks] = useLocalStorage('books',[]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList books={books} setBooks={setBooks}/>} />
        <Route path="/addbook" element={ <Addbook books={books} setBooks={setBooks} />} />
      </Routes>
    </Router>
  );
}

export default App;
