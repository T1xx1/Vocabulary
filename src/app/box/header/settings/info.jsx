import info from '../../../../data/meta.json';

export default function Info() {
   return (
      <span>
         {info.name} {info.version}
      </span>
   );
}
