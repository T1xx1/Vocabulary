import cross from '../assets/images/cross.png';
import Button from './button';

function Dialog(id, icon, inner, start = () => { }, end = () => { }) {
   function close() {
      document.querySelector(`#${id}`).removeAttribute('open');

      end();
   }
   function open() {
      start();

      document.querySelector(`#${id}`).setAttribute('open', '');
   }

   return <div>
      <dialog id={id} fullscreen=''>
         <header flex=''>
            <h1>{id}</h1>
            <Button src={cross} title='Close' click={close} />
         </header>
         <div>{inner}</div>
      </dialog>
      <Button src={icon} title={id} click={open} />
   </div>;
}

export default Dialog;