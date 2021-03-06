import { render } from 'preact';
import { Router } from 'preact-router';
import { Store, useStore } from './store';
import { Navigation } from './components/Navigation';
import { Player } from './components/Player';
import { Artists } from './pages/Artists';
import { Tracks } from './pages/Tracks';
import { Settings } from './pages/Settings';
import { main } from './main.css';

const App = () => {
  const store = useStore();
  if (!store) return <div>loading...</div>;

  return (
    <Store.Provider value={store}>
      <Navigation />
      <main class={main}>
        <Router>
          <Artists path='/artists' />
          <Tracks path='/tracks' />
          <Settings path='/settings' />
          <div default>404</div>
        </Router>
      </main>
      <Player />
    </Store.Provider>
  );
};

render(<App />, document.body);
