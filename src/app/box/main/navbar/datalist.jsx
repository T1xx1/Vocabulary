import React from 'react';

export default function Datalist({ val }) {
   return (
      val.length !== 0 ?? (
         <datalist id='datalist'>
            {[
               ...val.history.reduce((result, arr) => {
                  arr.forEach(word => result.add(word));

                  return result;
               }, new Set()),
            ]
               .sort()
               .map(word => (
                  <option key={word}>{word}</option>
               ))}
         </datalist>
      )
   );
}
