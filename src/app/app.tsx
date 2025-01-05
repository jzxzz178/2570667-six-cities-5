import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainScreen from '../components/main-screen-component/main-screen';
import NotFoundPage from '../components/not-found-page';
import Login from '../components/login-component/login';
import Favorites from '../components/favorites-component/favorites';
import Offer from '../components/offer-component/offer';
import PrivateRoute from '../components/private-route';
import { Offer as OfferType } from '../mocks/offers';

interface AppProps {
    offersCount: number; // Количество предложений передаётся как пропс
    offers: OfferType[];
  }

function App({ offersCount, offers }: AppProps): JSX.Element {
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen offersCount={offersCount} offers={offers}/>} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Favorites offers={offers} />
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
