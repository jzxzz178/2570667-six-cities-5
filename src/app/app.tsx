import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainScreen from '../components/main-screen-component/main-screen';
import NotFoundPage from '../components/not-found-page';
import Login from '../components/login-component/login';
import Favorites from '../components/favorites-component/favorites';
import Offer from '../components/offer-component/offer';
import PrivateRoute from '../components/private-route';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { fetchOffers } from '../store/api-actions';
import Spinner from '../components/loading-screen/loading-screen';

function App(): JSX.Element {
  const isAuthenticated = true;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const isOffersDataLoading = useAppSelector(
    (state) => state.app.isOffersDataLoading
  );
  if (isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
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
