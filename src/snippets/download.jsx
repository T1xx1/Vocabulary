export default function download(name, type, data) {
   let a = document.createElement('a');

   a.setAttribute('download', name);
   a.setAttribute('href', `data:${type};charset=utf-8,${encodeURIComponent(data)}`);

   document.body.appendChild(a);

   a.click();

   document.body.removeChild(a);
}
