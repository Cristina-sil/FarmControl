import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

const Back = (props) => (
  <Svg
    width={44}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={44} height={44} rx={22} fill="#97B733" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.325 14.175a1.166 1.166 0 0 0-1.65 0l-7 7a1.166 1.166 0 0 0 0 1.65l7 7a1.167 1.167 0 0 0 1.65-1.65L20.15 22l6.175-6.175a1.167 1.167 0 0 0 0-1.65Z"
        fill="#FFFFFF"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h44v44H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Back;
