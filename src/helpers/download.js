function download(name, data) {
   let a = document.createElement('a');

   a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
   a.setAttribute('download', name);

   document.body.appendChild(a);

   a.click();
}

export default download;