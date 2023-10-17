import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Plus = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    fill="#FFFFFF"
    width={55}
    height={55}
    {...props}
  >
    <Path d="M109 10.5c-1.8.8-3.4 2.6-4.1 4.4-.4.9-.5 15.4-.5 45.4v44.1l-44.8.1c-44.4.1-44.8.1-46.2 1.2-.7.5-1.8 1.6-2.4 2.4-1 1.3-1 1.9-1 20s0 18.7 1 20c.5.7 1.6 1.8 2.4 2.4 1.3 1 1.8 1 46.2 1.2l44.8.1.1 44.8c.1 44.4.1 44.8 1.2 46.2.5.7 1.6 1.8 2.4 2.4 1.3 1 1.9 1 20 1s18.7 0 20-1c.7-.5 1.8-1.6 2.4-2.4 1-1.3 1-1.8 1.2-46.2l.1-44.8 44.8-.1c44.4-.1 44.8-.1 46.2-1.2.7-.5 1.8-1.6 2.4-2.4 1-1.3 1-1.9 1-20s0-18.7-1-20c-.5-.7-1.6-1.8-2.4-2.4-1.3-1-1.8-1-46.2-1.2l-44.8-.1-.1-44.8c-.1-44.4-.1-44.8-1.2-46.2-.5-.7-1.6-1.8-2.4-2.4-1.3-1-2-1-19.4-1.1-14.4 0-18.5.1-19.7.6z" />
  </Svg>
);
export default Plus;