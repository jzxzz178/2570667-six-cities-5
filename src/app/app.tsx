import MainScreen from '../home-component/main-screen';

interface AppProps {
    offersCount: number; // Количество предложений передаётся как пропс
  }

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <div>
      <MainScreen offersCount={offersCount} />
    </div>
  );
}

export default App;
