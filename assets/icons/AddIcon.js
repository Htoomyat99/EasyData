import * as React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
const AddIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...props}
    width={props.width}
    height={props.height}>
    <Circle cx={24} cy={24} r={21} fill="#4CAF50" />
    <G fill="#fff">
      <Path d="M21 14h6v20h-6z" />
      <Path d="M14 21h20v6H14z" />
    </G>
  </Svg>
);
export default AddIcon;
