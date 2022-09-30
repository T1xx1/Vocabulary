import React from 'react';

export default function DefaultWord({ value, dispatch}) {
   return (
      <div id='defaultWord'>
         <span>Deafult word</span>
         <input
            type='text'
            className='word'
            onChange={e => {
               dispatch({
                  type: 'edit',
                  payload: state => {
                     return {
                        ...state,
                        settings: {
                           defaultWord: e.target.value,
                        },
                     };
                  },
               });
            }}
            placeholder='Word...'
            value={value.settings.defaultWord ?? ''}
         />
      </div>
   );
}
