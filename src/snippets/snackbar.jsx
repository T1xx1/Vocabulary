export default function Snackbar(m) {
   let node = document.querySelector('dialog[open]') ?? document.body;
   let output = document.createElement('output');

   document.querySelectorAll('.snackbar').forEach(snackbar => snackbar.remove());

   output.className = 'snackbar';
   output.innerHTML = m;

   node.appendChild(output);

   Promise.all(output.getAnimations().map(e => e.finished))
      .then(() => node.removeChild(output))
      .catch(() => {});
}
