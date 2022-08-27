import React from 'react';

import api from '../data/api.json';
import info from '../data/info.json';

import Dialog from '../snippets/dialog';

export default function Report({ word }) {
   return (
      <Dialog id='report'>
         <form action={`${api.report}/c0f583921a7eb01fcc26c0d9f91d1f26`} method='POST'>
            <input type='text' defaultValue={word} name='Word' placeholder='Word...' required spellCheck={false} />
            <input type='email' name='Email' placeholder='Your email (optional)...' />
            <input type='hidden' name='_autoresponse' />
            <button type='submit' onClick={() => document.querySelector('#report>dialog').close()}>
               Report
            </button>
            <input type='hidden' name='_next' value={info.start_url} />
         </form>
      </Dialog>
   );
}
