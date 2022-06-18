function Button({ src, title, click }) {
   return <button className='button' onClick={click} title={title}>
      <img src={src} alt={title} />
   </button>;
}

export default Button;