import React from 'react';

export default function Dialog({ id, title = id, trigger, children }) {
   title = title.charAt(0).toUpperCase() + title.slice(1);

   return (
      <div id={id} className='dialog'>
         <div
            className='trigger'
            onClick={e => {
               e = e.target;

               while (e?.className !== 'trigger') e = e.parentNode;

               e.nextElementSibling.showModal();
            }}
         >
            {trigger}
         </div>
         <dialog>
            <div>
               <h1>{title}</h1>
               <img
                  src='https://img.icons8.com/emoji/96/FAB005/cross-mark-emoji.png'
                  alt='Close'
                  onClick={e => e.target.parentNode.parentNode.close()}
               />
            </div>
            <div className='inner'>{children}</div>
         </dialog>
      </div>
   );
}
