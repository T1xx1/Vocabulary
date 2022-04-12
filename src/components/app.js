import '../css/style.css';

import json from '../js/json';

import Header from './header';
import Input from './input';

function App() {
  let word = String(new URL(window.location.href).searchParams.get('word') ?? '');

  if (json.read() === null) json.init();

  return <div id='box'>
    <Header />
    <Input word={word} />

    <div id='results'></div>
  </div>;
}

export default App;