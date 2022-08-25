export default function Snackbar(output) {
   let node = document.querySelector('dialog[open]') ?? document.querySelector('#root');
   let snackbar = document.createElement('output');

   snackbar.className = 'snackbar';
   snackbar.innerHTML = output;

   node.appendChild(snackbar);

   Promise.all(snackbar.getAnimations().map(e => e.finished))
      .then(() => node.removeChild(snackbar))
      .catch(() => {});
}
