import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/orders/new" element={ <NewOrderPage /> } />
            <Route path="/orders" element={ <OrderHistoryPage /> } />
          </Routes>
        </>
          :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
