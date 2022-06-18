import Search from '../layouts/search';

function Word({ inner }) {
   function click(event) {
      Search(event.target.innerHTML);
   }

   return <span className='word' onClick={click}>{inner}</span>;
}

export default Word;