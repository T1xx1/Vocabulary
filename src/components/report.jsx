import React from 'react';

import { Dialog, funcs } from 'reactyio';

import List from './list';

import Form from '../services/form';

export default function Report({ val, defaultV, setSearch, dispatch }) {
   return (
      <Dialog
         id='report'
         title='Report'
         trigger={<button>Report</button>}>
         <Form
            after={e => {
               e.target.parentNode.parentNode.close();

               dispatch({
                  type: 'words reported add',
                  payload: [defaultV.word],
               });

               funcs.Snackbar('Word reported');
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
            {val.length === 0 ? (
               <span>No reports</span>
            ) : (
               <ul>
                  <List
                     val={val}
                     setSearch={setSearch}
                  />
               </ul>
            )}
         </div>
      </Dialog>
   );
}
