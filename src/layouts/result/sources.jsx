import React from 'react';

export default function Sources({ v }) {
   return (
      <div id='sources'>
         <b>Sources</b>
         <ul>
            {v.map(source => {
               let url = new URL(source);

               return (
                  <li key={source}>
                     <a href={source}>{url.host + url.pathname}</a>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
