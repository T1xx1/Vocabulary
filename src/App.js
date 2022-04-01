import './App.css';
import Nav from './components/nav';

const json = {
  read: () => {
    return JSON.parse(window.localStorage.getItem('vocabulary'));
  },
  write: obj => {
    window.localStorage.setItem('vocabulary', JSON.stringify(obj));
  }
};

function App() {
  if (json.read() === null) json.write({
    learned: {},
    history: {},
    saved: {}
  });

  return (
    <>
      <div id='box' className='card'>
        <h1>Vocabulary</h1>

        <Nav />

        <div id='results'></div>
      </div>

      <img src='https://img.icons8.com/material-outlined/48/000000/github.png' className='card' id='github' alt='GitHub' onClick={
        () => window.open('https://github.com/T1xx1/Vocabulary')
      } />
    </>
  );
}

export default App;
export { json };