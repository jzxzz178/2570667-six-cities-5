import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainScreen from '../components/main-screen-component/main-screen';
import NotFoundPage from '../components/not-found-page';
import Login from '../components/login-component/login';
import Favorites from '../components/favorites-component/favorites';
import Offer from '../components/offer-component/offer';
import PrivateRoute from '../components/private-route';

interface AppProps {
    offersCount: number; // Количество предложений передаётся как пропс
  }

function App({ offersCount }: AppProps): JSX.Element {
  const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen offersCount={offersCount} />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
