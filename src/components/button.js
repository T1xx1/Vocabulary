function Button({ src, title, click = () => { } }) {
   return <button className='button' onClick={click}>
      <img src={src} alt={title} title={title} />
   </button>;
}

export default Button;