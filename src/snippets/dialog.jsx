export default function Dialog({ id, icon, inner = <></>}) {
   let title = id.charAt(0).toUpperCase() + id.slice(1);

   return <div id={id}>
      <img src={icon} alt={title} onClick={() => document.querySelector(`#${id}>dialog`).showModal()} />
      <dialog>
         <div>
            <h1>{title}</h1>
            <img src='https://img.icons8.com/emoji/96/FAB005/cross-mark-emoji.png' alt='Close' onClick={() => document.querySelector(`#${id}>dialog`).close()} />
         </div>
         <div>{inner}</div>
      </dialog>
   </div>;
}