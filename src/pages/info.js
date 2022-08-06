import info from '../data/info.json';

import Dialog from '../components/dialog';
import github from '../assets/img/github.png';
import i from '../assets/img/i.png';

export default function Info() {
   return Dialog('info', i, <>
      <h3>{info.name}</h3>
      <div>{info.description}</div>
      <div>{info.version}</div>
      <img src={github} alt='GitHub' title='GitHub' onClick={() => window.open('https://github.com/T1xx1/Vocabulary')} />
   </>);
}