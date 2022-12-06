import info from '../../../../data/meta.json';

import { Sign } from 'reactyio';

export default function Info() {
   return (
      <div>
         <span>
            {info.name} {info.version} •{' '}
         </span>
         <Sign user='T1xx1' />
      </div>
   );
}
