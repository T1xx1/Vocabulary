import React from 'react';

import dots from '../assets/dots.png';
import info from '../data/info.json';

import Snackbar from '../components/snackbar';

import Word from '../components/word';

export default function Bar({ value, dispatch, search, setSearch, phonetic = '' }) {
   return (
      <div id='bar'>
         <div>
            <h2>
               <Word setSearch={setSearch}>{search}</Word>
            </h2>
            {phonetic}
         </div>
         <div>
            <input
               type='checkbox'
               defaultChecked={value.words.saved.includes(search)}
               onChange={e => {
                  e = e.target.checked;

                  if (e) {
                     dispatch({
                        type: 'save',
                        payload: [search],
                     });

                     Snackbar('Word saved');
                  } else {
                     dispatch({
                        type: 'rm',
                        payload: search,
                     });

                     Snackbar('Word removed');
                  }
               }}
            />
            <img
               src={dots}
               alt='Share'
               onClick={() => {
                  window.navigator.share({
                     title: `Word '${search}' on ${info.name}`,
                     url: `${info.start_url}?q=${search}`,
                  });
               }}
            />
         </div>
      </div>
   );
}
