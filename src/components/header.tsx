import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutUser } from '../store/action';

function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.app.authorizationStatus);
  const userData = useAppSelector((state) => state.app.userData);

  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to="/"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthorizationStatus.Auth ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        {userData?.avatarUrl && (
                          <img
                            className="header__avatar user__avatar"
                            src={userData.avatarUrl}
                            alt="User avatar"
                            width="40"
                            height="40"
                          />
                        )}
                      </div>
                      <span className="header__user-name user__name">
                        {userData?.name}
                      </span>
                      <span className="header__favorite-count">1</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <button
                      className="header__nav-link"
                      type="button"
                      onClick={() => {
                        onLogout();
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </button>
                  </li>
                </>
              ) : (
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
