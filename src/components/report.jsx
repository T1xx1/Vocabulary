import React from 'react';

import Dialog from '../snippets/dialog';
import Snackbar from '../snippets/snackbar';

import List from './list';

import Form from '../services/form';

export default function Report({ v, defaultV, setSearch, dispatch }) {
   return (
      <Dialog
         id='report'
         trigger={<button>Report</button>}>
         <Form
            after={e => {
               e.target.parentNode.parentNode.close();

               dispatch({
                  type: 'report',
                  payload: [defaultV.word],
               });

               Snackbar('Word reported');
            }}>
            <input
               type='text'
               defaultValue={defaultV?.word}
               name='Word'
               placeholder='Word...'
               required
            />
            <input
               type='email'
               name='Email'
               placeholder='Your email (opt)...'
            />
            <textarea
               name='description'
               defaultValue={defaultV?.description}
               placeholder='Description (opt)...'></textarea>

            <input
               type='hidden'
               name='_autoresponse'
            />
            <input
               type='hidden'
               name='_captcha'
               value='false'
            />
            <input
               type='hidden'
               name='_template'
               value='table'
            />
         </Form>
         <div>
            <h2>Your reports</h2>
            {v.length === 0 ? (
               <span>No reports</span>
            ) : (
               <ul>
                  <List
                     v={v}
                     setSearch={setSearch}
                  />
               </ul>
            )}
         </div>
      </Dialog>
   );
}
