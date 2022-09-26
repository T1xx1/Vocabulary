export default function url(v, setSearch, dispatch) {
   let url = new URL(window.location.href);

   setSearch(url.searchParams.get('q') || v.defaultWord || '');

   let importQ = url.searchParams.get('import');

   importQ &&
      dispatch({
         type: 'words saved add',
         payload: importQ.split(','),
      });
}
