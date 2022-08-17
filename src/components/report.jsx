import Dialog from '../snippets/dialog';

import warn from '../assets/img/warn.png';

export default function Report({ word }) {
   return <Dialog id='report'>
      <form form action='https://formsubmit.co/cbcbc4466b2792c4fb4e774dda86f505' method="POST" >
         <input type='text' name='word' defaultValue={word} placeholder='Word' required />
         <input type='text' name='email' placeholder='Your email (optional)' />
         <button type='submit' onClick={() => document.querySelector('#report>dialog').close()}>Report</button>
      </form>
   </Dialog>;
}