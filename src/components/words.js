import ReactDOM from 'react-dom';

import '../css/style.css';

import json from '../js/json';

function Words() {
   function close() {
      document.querySelector('#words').removeAttribute('open');
   }
   function open() {
      let words = [...new Set(json.read().learned)].sort().map(word => <li key={word}><div><span className='word'>{word}</span><button onClick={remove}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFBElEQVR4nO2dz28bVRDHv7P22hYCJeo9padSGoLjJEUcAaUOJGlJLxUXxIF/AQl6gisXIoS4USH1hIqQAqX5aaGeUVy7UQgULm0Dh1yipEVV7LU9HBqjNErs9b63eeNmPkfv6ruT+cST9duXBFAURVEURVEU5bhBrgtoRWVo/DNifGqSweDP06W5T2zVZBuxAmw0v4lkCSIF2Gx+E6kSxAmIo/lNJEqwIuDxuXyfX0tOMyMPwgs2MsXCeETgQr3BVzIr83dN44wFPD6X70vWkmUAJ0yzuozNWp2zz63M/W0S4plW4deS0zh+zQeAE36SvjANMRbAjLxpRrfCjDHTDGMBxxw2DTAWQOCCaUa3QoDx124soN7gKwA2TXO6kM06e1dMQ4wFZFbm79bqnCXC9wAemuZ1AQ8J+KHB3uuZ8s9/uS5GURRFURRFUZTuw/oDmWpu3Hh9RDKp0qzVnulinGNUgGNUgGNUgGNUgGNUgGNUgGNUgGNUgGNUgGNUgGNUgGOSrgs4gPtMWCVGH4B+AAnDvDqAVWasE2EAwIvGFVpEkoDtBvH7mdtzN5ov7GTHT3sergPIRswsN9i7vHf7yE5u4qIHvgagx7BeK4gZQfubDwCZO7N/+px6A8ByhMhln1Nv7t+7kynd/IkZH5jUahMpAu7tb34TKs9s+Zw6j84kLPucOk/lma2DDqbLsz8CuB+hTuuIEMCM1VbHO5TQsvn/X5NaX/OoECGACCfbnlOe2fK96iiAXw8/CSW/Wh9r1/wnp8r4YSxCAID+nez46XYnUbGw7XNqDAe/E5b9Ruot+m2h7UbhyvCFM2C8HKVQ20gRkPA8XOfBqd52Jx4yjkKNHQDgwaleatS/g/ntrRWkCACAbOBVf+H+sba/7vTUOOpg7PDwaE9A1QVEv621jiQBACMXpBILod4Ju+Mo7NjhwaneoJEqAHjNSq2WkLkthVDyK/XRMI0NAw+P9gSN1CIsNP94bEth5IJ0ohBmHLWNstj8OJApALAiQXrzAckCACMJ3dB8QLoAIJKEbmk+0A0CnnHkC4hwR0TFwrbvVfNotWwhBNkCDG5Hu0WCXAEWPgt0gwSZAix+EJMuQaKA0KuaPDjV28myBaI9WYsVWQIiLKxFWsAThCQB5UgLaxEW8ADcsVGwDaQIqDXYuxx2PT+g6hKAkT0vjwRUXQr7PIG9xHt4sl3FOVIErIb5yyN71vNHDjg8EnYcpYs3/gCwFqFO64gQwIR/2p4TZj2/g3HEoPXOqowHEQKI0d/q+CFj5zBCjSMCv9JJjXEhQgCAUzu5iYsHHeiw+U1aSqgMTV4C2u/EOAqkCIAHvlYZHH9372uV4QtnAqreQmfNbzISUPXWzqtvv/RU5tDkJeLGtya12kTiI8kHDFolcB+As7CzOXeNQeu7Y8foO9/2I0lJm3ObnCSwzfGQADBA4AGLmdYQM4KOKyrAMSrAMSrAMSrAMSrAMSrAMSrAMfYFMB5Zz5SD9T9Obl8A0QPrmVIgWP/aYngH8KL1TCEweN52pnUBTPwNhDzus0wNlLxqO9S6gHRpbg3A17ZzncP4avdRplViuQvyvY2PACzFke0CJiz6iY2P48iORQAVi4HvbUyA8CWAWhzXOCJqYEynaGOSisUgjgvE/r8kK7l3zhLoQxDyYDoF8PNxX9MM+hfE98C0wISr6ds3f3ddkaIoiqIoiqIozxb/AaabGFcPu5t6AAAAAElFTkSuQmCC" className='small'/></button></div></li>);

      if (words.length === 0) words = <h3>You haven't learn any word</h3>

      ReactDOM.render(
         <ul>{words}</ul>,
         document.querySelector('#words>div')
      );

      document.querySelector('#words').setAttribute('open', '');
   }
   function remove(e) {
      let learned = json.read().learned;

      learned.splice(learned.indexOf(e.target.parentNode.parentNode.querySelector('.word').innerHTML), 1);

      json.update('learned', learned);

      alert('Words deleted');

      open();
   }

   return <>
      <button><img src='https://img.icons8.com/fluency-systems-filled/48/000000/dictionary.png' className='big' alt='Learned words' onClick={open} /></button>

      <dialog id='words'>
         <header>
            <h2>Learned words</h2>

            <button><img src="https://img.icons8.com/tiny-color/32/000000/experimental-delete-sign-tiny-color.png" className='small' alt='Close' onClick={close} /></button>
         </header>

         <div></div>
      </dialog>
   </>;
}

export default Words;