import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
