
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import './index.css';
import Form from './components/Form';
import AppNav from './components/AppNav';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import { CityProvider } from './contexts/CityContext';
import { AuthProvider } from './contexts/FakeAuth';
import ProtectedRoute from './pages/ProtectedRoute';
function App() {

  return (
    <AuthProvider>
      <CityProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='product' element={<Product />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='product' element={<Product />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='app' element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
            }>
              <Route index element={<Navigate replace to='cities' />} />
              <Route path='cities' element={<CityList />} />
              <Route path='cities/:id' element={<City />} />
              <Route path='countries' element={<CountryList />} />
              <Route path='form' element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CityProvider>
    </AuthProvider>
  )
}

export default App
