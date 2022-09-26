import React from 'react';

export default function Word({ setSearch = () => {}, children }) {
   return (
      <span
         className='word'
         onClick={() => {
            setSearch(children);

            document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
         }}
      >
         {children.toLowerCase()}
      </span>
   );
}
