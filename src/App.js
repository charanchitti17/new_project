import './App.css'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ExplorePage from './pages/ExplorePage';
import ArticleReadingPage from './pages/ArticleReadingPage';
import LogIn from './pages/LogInPage';
import Registration from './pages/RegistrationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelpPage from './pages/HelpPage';
import ProfilePage from './pages/ProfilePage';
import ArticleCreatePage from './pages/ArticleCreatePage'
import NavBar from './components/NavBar';
const App = () => { 
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
          <Route path='/explore' element={<ExplorePage />}></Route>
          <Route path='/help' element={<HelpPage />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='/explore/:article_id' element={<ArticleReadingPage />}></Route>
            <Route path='/:article_id' element={<ArticleReadingPage />}></Route>
          <Route path='/logIn' element={<LogIn/>}></Route>
            <Route path='/register' element={<Registration />}></Route>
            <Route path='/articleCreatePage' element={<ArticleCreatePage/>}></Route>
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
};
export default App;