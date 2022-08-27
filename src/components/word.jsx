import React from 'react';

export default function Word({ children, setSearch }) {
   return (
      <span
         className='word'
         onClick={() => {
            setSearch(children);

            document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
         }}
      >
         {children}
      </span>
   );
}
