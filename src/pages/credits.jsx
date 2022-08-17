import cc from '../assets/img/cc.png';

import Dialog from '../snippets/dialog';

export default function Credits() {
   return <Dialog id='credits' icon={cc}>{
      <ul>
         <li>Words informations by <a href='https://dictionaryapi.dev/'>Free dictionary API</a></li>
         <li>Icons by <a href='https://icons8.com' target='_blank'>Icons8</a></li>
         <li>Random words by <a href='https://random-word-api.herokuapp.com' target="_blank">Random Word API</a></li>
         <li>Report by <a href='https://formsubmit.co/'>Formsubmit</a></li>
      </ul>
   }</Dialog>;
}