import cross from '../assets/images/cross.png';
import Button from './button';

function Dialog(id, icon, inner = <></>, load = {
   beginning: () => { },
   during: () => { },
   end: () => { }
}) {
   function close() {
      document.querySelector(`#${id}`).removeAttribute('open');

      load.end();
   }
   function open() {
      load.beginning();

      document.querySelector(`#${id}`).setAttribute('open', '');

      load.during();
   }

   if (load.beginning === undefined) load.beginning = () => { };
   if (load.during === undefined) load.during = () => { };
   if (load.end === undefined) load.end = () => { };

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