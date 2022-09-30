import React from 'react';

export default function Datalist({ v }) {
   return (
      <datalist id='datalist'>
         {[
            ...v.history.reduce((result, arr) => {
               arr.forEach(word => result.add(word));

               return result;
            }, new Set()),
         ]
            .sort()
            .map(word => (
               <option key={word}>{word}</option>
            ))}
      </datalist>
   );
}
