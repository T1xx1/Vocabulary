function Word({ inner }) {
   function click(event) {
      //Search
   }

   return <span className='word' onClick={click}>{inner}</span>;
}

export default Word;