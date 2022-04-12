import '../css/style.css';

import Settings from './settings';
import Words from './words';

function Header() {
   return <header>
      <h1>Vocabulary</h1>

      <nav>
         <Words />
         <Settings />
      </nav>
   </header>;
}

export default Header;