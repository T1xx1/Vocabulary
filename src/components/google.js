function Google({ search }) {
   return <a href={`https://www.google.com/search?q=${search}`}>Search "{search}" on Google</a>;
}

export default Google;