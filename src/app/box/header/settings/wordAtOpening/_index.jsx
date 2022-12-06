import React, { useState } from 'react';

import CustomWord from './customword';

export default function WordAtOpening({ val, setSearch, dispatch }) {
   let [wordType, setWordType] = useState(val._type);

   return (
      <div id='wordAtOpening'>
         <h2>Word at opening</h2>
         <select
            value={wordType}
            onChange={e => {
               let selectedWordType = e.target.selectedOptions[0].value;

               setWordType(selectedWordType);

               dispatch({
                  type: 'settings wordAtOpening _type',
                  payload: selectedWordType,
               });

               let _default = val[selectedWordType];

               if (_default?.word !== undefined) _default = _default.word;

               dispatch({
                  type: 'settings wordAtOpening _default',
                  payload: _default,
               });

               setSearch(_default);
            }}>
            <option value='customWord'>Custom word</option>
            <option value='wordOfTheDay'>Word of the day</option>
         </select>
         {wordType === 'customWord' && (
            <CustomWord
               val={val}
               setSearch={setSearch}
               dispatch={dispatch}
            />
         )}
      </div>
   );
}
