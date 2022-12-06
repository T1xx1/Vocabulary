import React from 'react';

export default function Sources({ val }) {
   return (
      <div id='sources'>
         <b>Sources</b>
         <ul>
            {val.map(source => {
               let url = new URL(source);

               return (
                  <li key={source}>
                     <a href={source} target="_blank">{url.host + url.pathname}</a>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
