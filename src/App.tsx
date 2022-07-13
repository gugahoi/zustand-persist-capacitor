import './App.css';
import { useStore } from './store';

function App() {
  const store = useStore()

  return (
    <div className="App">
      <p>
        User has signed up: {store.signedUp.toString()}
      </p>
      <button onClick={() => store.setSignedUp()}>SING ME UP!</button>
    </div>
  );
}

export default App;
