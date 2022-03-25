function Word(props) {
   function click(event) {
      //Search
   }

   return <span className='word' onClick={click}>{props.inner}</span>;
}

export default Word;