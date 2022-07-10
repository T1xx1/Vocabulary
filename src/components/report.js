import Dialog from './dialog.js';

function Report({ word }) {
   return Dialog('report', '', <>
      <form action='https://formsubmit.co/cbcbc4466b2792c4fb4e774dda86f505' method="POST">
         <span>Word</span>
         <input type='text' name='word' required defaultValue={word} />
         <input type='text'  name='email' placeholder='Your email (optional)' />
         <button type='submit'>Report</button>
      </form>
   </>, () => {
      document.querySelector('button[type="submit"]').addEventListener('click', () => document.querySelector('#report>dialog').close());
   });
}

export default Report;