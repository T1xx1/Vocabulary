import React from 'react';

import Dialog from '../../../snippets/dialog';

import vocabulary from '../../../assets/vocabulary.png';

import Imgbutton from '../../../components/imgbutton';
import List from '../../../components/list';

import All from './all';
import Download from './download';
import Upload from './upload';

export default function Words({ v, setSearch, dispatch }) {
   return (
      <Dialog
         id='words'
         trigger={
            <Imgbutton
               src={vocabulary}
               alt='Words'
            />
         }>
         <div>
            {v.length === 0 ? (
               <h2>No words saved</h2>
            ) : (
               <input
                  type='text'
                  className='word'
                  onKeyUp={e => {
                     e.target.parentNode.nextElementSibling.childNodes.forEach(word => {
                        if (word.innerHTML.includes(e.target.value.toLowerCase())) {
                           word.removeAttribute('hidden');
                        } else word.setAttribute('hidden', '');
                     });
                  }}
                  placeholder={`Search in ${v.length} words saved...`}
               />
            )}
            <div>
               <All
                  v={v}
                  setSearch={setSearch}
               />
               <Download v={v} />
               <Upload dispatch={dispatch} />
            </div>
         </div>
         {v.length !== 0 && (
            <div>
               <List
                  v={v}
                  setSearch={setSearch}
               />
            </div>
         )}
      </Dialog>
   );
}
