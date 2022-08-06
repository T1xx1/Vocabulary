import grid from '../assets/img/grid.png';

import Dialog from '../components/dialog';
import Word from '../components/word';

export default function All({ value }) {
   return Dialog('all', grid, value.words.saved.map(word => <span key={word} onClick={() => {
      document.querySelector('#all>dialog').close();
      document.querySelector('#words>dialog').close();
   }}><Word inner={word} /></span>));
}