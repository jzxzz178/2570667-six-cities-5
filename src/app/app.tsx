import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainScreen from '../components/main-screen-component/main-screen';
import NotFoundPage from '../components/not-found-page';
import Favorites from '../components/favorites-component/favorites';
import Offer from '../components/offer-component/offer';
import PrivateRoute from '../components/private-route';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { fetchOffers, checkAuthAction } from '../store/api-actions';
import LoadintScreen from '../components/loading-screen/loading-screen';
import { AppRoute, AuthorizationStatus } from '../const';
import AuthScreen from '../components/auth-screen/auth-screen';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const authStatus = useAppSelector((state) => state.app.authorizationStatus);

  const isOffersDataLoading = useAppSelector(
    (state) => state.app.isOffersDataLoading
  );
  if (isOffersDataLoading || authStatus === AuthorizationStatus.Unknown) {
    return <LoadintScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<AuthScreen />} />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={authStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer />} />
        <Route path={AppRoute.NoFound} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
