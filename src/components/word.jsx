export default function Word({ w, setSearch }) {
   return (
      <span className='word' onClick={() => setSearch(w)}>
         {w}
      </span>
   );
}
