import React from 'react';

export default function Form({ after, children }) {
   return (
      <form
         action='https://formsubmit.co/c0f583921a7eb01fcc26c0d9f91d1f26'
         method='POST'
         onSubmit={e => {
            e.preventDefault();

            after(e);
         }}
      >
         {children}
         <button type='submit'>Report</button>
      </form>
   );
}
