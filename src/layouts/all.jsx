import grid from '../assets/grid.png';

import Dialog from '../snippets/dialog';
import Word from '../components/word';

export default function All({ value, setSearch }) {
   return (
      <Dialog id='all' icon={grid}>
         <div>
            <progress max={500000} value={value.words.saved.length}></progress>
            <div>{value.words.saved.length} / 500.000 • {(100 / 500000 * value.words.saved.length).toFixed(2)}%</div>
         </div>
         <div>
            {value.words.saved.map(word => (
               <span key={word}>
                  <Word w={word} setSearch={setSearch} />
               </span>
            ))}
         </div>
      </Dialog>
   );
}
