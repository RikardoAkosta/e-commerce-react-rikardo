
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, Product, Purchases, Login, SignUp, UserInfo } from './pages';
import { Footer, LoadingScreen, ProtectedRoutes, NavBar } from './components';

import { useSelector } from 'react-redux';




function App() {

  const isLoading = useSelector(state => state./* app. */isLoading);

  return (
    <HashRouter>

    

      <NavBar />
      { isLoading && <LoadingScreen /> }
      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/user" element={<UserInfo />} />
          </Route>

        </Routes>
        
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
