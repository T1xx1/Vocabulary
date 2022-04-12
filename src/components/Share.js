import '../css/style.css';

function Share(props) {
   function copy() {
      navigator.clipboard.writeText(`https:/t1xx1.github.io/Vocabulary?word=${props.word}`);

      alert('Link copied');
   }

   return <button>
      <img src="https://img.icons8.com/ios-filled/50/000000/share-3.png" className='medium' alt='Learn word' onClick={copy} />
   </button>;
}

export default Share;