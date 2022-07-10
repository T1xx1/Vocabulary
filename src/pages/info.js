import github from '../assets/img/github.png';
import i from '../assets/img/i.png'
import info from '../constants/info';
import Dialog from '../components/dialog';

function Info() {
   let open = () => window.open('https://github.com/T1xx1/Vocabulary');

   return Dialog('info', i, <>
      <h3>{info.name}</h3>
      <div>{info.description}</div>
      <div>{info.version}</div>
      <button onClick={open}>
         <img src={github} alt='GitHub' title='GitHub' />
      </button>
   </>);
}

export default Info;