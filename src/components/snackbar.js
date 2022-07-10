function Snackbar(output) {
   let app = document.querySelector('#app');
   let snackbar = document.createElement('output');

   snackbar.className = 'snackbar';
   snackbar.innerHTML = output;

   app.appendChild(snackbar);

   Promise.all(snackbar.getAnimations().map(e => e.finished)).then(() => app.removeChild(snackbar));
}

export default Snackbar;