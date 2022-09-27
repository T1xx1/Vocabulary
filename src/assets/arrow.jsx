import React from 'react';

export default function Arrow() {
   let dimensions = 50;
   let padding = 15;
   let stroke = '#ffffff';
   let strokeWidth = 5;
   let xmlns = 'http://www.w3.org/2000/svg';

   let halfDimensions = dimensions / 2;

   return (
      <svg
         xmlns={xmlns}
         height={dimensions}
         width={dimensions}
         stroke={stroke}
         strokeWidth={strokeWidth}>
         <g>
            <circle
               cx={padding}
               cy={halfDimensions}
               r={0.01}></circle>
            <line
               x1={padding}
               y1={halfDimensions}
               x2={halfDimensions}
               y2={padding}
            />
         </g>
         <g>
            <circle
               cx={halfDimensions}
               cy={padding + 0.15}
               r={0.01}></circle>
            <line
               x1={halfDimensions}
               y1={padding}
               x2={halfDimensions}
               y2={dimensions - padding}
            />
            <circle
               cx={halfDimensions}
               cy={dimensions - padding}
               r={0.01}></circle>
         </g>
         <g>
            <line
               x1={halfDimensions}
               y1={padding}
               x2={dimensions - padding}
               y2={25}
            />
            <circle
               cx={dimensions - padding}
               cy={halfDimensions}
               r={0.01}></circle>
         </g>
      </svg>
   );
}
