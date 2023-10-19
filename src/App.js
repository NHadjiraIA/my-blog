import './App.css';
import HomePage from '../src/pages/HomePage';
import ArticlesListPage from './pages/ArticlesListPage'
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
        <NavBar /> 
        </div>
        <div id="page-blog">
          <Routes>
            <Route path= "/" element={<HomePage/>} />
            <Route  path= "/Articles" element={ <ArticlesListPage />} />
            <Route  path= "/Articles/:articleId" element={ <ArticlePage />} />
            <Route  path= "/About" element={  <AboutPage />} />
            <Route  path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
