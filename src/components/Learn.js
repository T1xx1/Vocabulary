import '../css/style.css';

import json from '../js/json';

function Learn() {
   function learn() {
      json.push('learned', document.querySelector('input').value);

      alert('Word learned');
   }

   return <button>
      <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/48/26e07f/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya-3.png" className='big' alt='Learn word' onClick={learn} />
   </button>;
}

export default Learn;