import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const FilterIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    width={props.width}
    height={props.height}
    {...props}>
    <Path
      d="M2.498 9.202v4.266l49.423 61.779h1.783v43.551l20.592-16.2V75.247h1.783l49.423-61.779V9.202H2.498z"
      style={{
        fill: '#960019',
      }}
    />
  </Svg>
);
export default FilterIcon;
