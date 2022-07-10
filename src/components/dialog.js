import cross from '../assets/img/cross.png';
import Button from './button';

function Dialog(id, icon, inner = <></>, beginning = () => { }, during = () => { }, end = () => { }) {
   let close = () => {
      document.querySelector(`#${id}>dialog`).close();

      end();
   }
   let open = () => {
      beginning();

      document.querySelector(`#${id}>dialog`).showModal();
   }

   let title = id.charAt(0).toUpperCase() + id.slice(1);

   return <div id={id} onLoad={during}>
      <Button src={icon} title={title} click={open} />
      <dialog>
         <header>
            <h1>{title}</h1>
            <Button src={cross} title='Close' click={close} />
         </header>
         <div>{inner}</div>
      </dialog>
   </div>;
}

export default Dialog;