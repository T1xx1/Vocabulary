import cross from '../assets/img/cross.png';

export default function Dialog(id, icon, inner = <></>, beginning = () => { }, during = () => { }, end = () => { }) {
   let close = () => {
      document.querySelector(`#${id}>dialog`).close();

      end();
   };
   let open = () => {
      beginning();

      document.querySelector(`#${id}>dialog`).showModal();
   };

   let title = id.charAt(0).toUpperCase() + id.slice(1);

   return <div id={id} onLoad={during}>
      <img src={icon} alt={title} onClick={open} />
      <dialog>
         <header>
            <h1>{title}</h1>
            <img src={cross} alt='Close' onClick={close} />
         </header>
         <div>{inner}</div>
      </dialog>
   </div>;
}