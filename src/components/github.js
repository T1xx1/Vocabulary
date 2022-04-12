import '../css/style.css';

function GitHub() {
   function open() {
      window.open('https://github.com/T1xx1/Vocabulary');
   }

   return <button><img src='https://img.icons8.com/material-outlined/48/000000/github.png' className='big' alt='GitHub' onClick={open} /></button>;
}

export default GitHub;