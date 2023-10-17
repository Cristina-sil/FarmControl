import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Text, TSpan } from "react-native-svg";
const LogoHeader = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={61.619}
    height={57.174}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path
          fill="none"
          d="M0 0h61.619v32.332H0z"
          data-name="Ret\xE2ngulo 2"
        />
      </ClipPath>
    </Defs>
    <G data-name="Grupo 85">
      <G fill="#3a1711" data-name="Grupo 6" fontFamily="Helvetica">
        <Text fontSize={15} transform="translate(8.631 44.549)">
          <TSpan x={0} y={0}>
            {"Farm"}
          </TSpan>
        </Text>
        <Text fontSize={10} transform="translate(10.484 55.174)">
          <TSpan x={0} y={0}>
            {"Control"}
          </TSpan>
        </Text>
      </G>
      <G data-name="Grupo 9">
        <G clipPath="url(#a)" data-name="Grupo 8" transform="translate(.001)">
          <G fill="#e55526" data-name="Grupo 7">
            <Path
              d="M20.212 40.135a12.376 12.376 0 1 1 16.981 4.242 12.377 12.377 0 0 1-16.981-4.242Z"
              data-name="Caminho 32"
            />
            <Path
              d="M44.991 25.568a1.651 1.651 0 0 1 .565-2.265l6.2-3.722a1.651 1.651 0 0 1 2.265.566l.13.217a1.651 1.651 0 0 1-.565 2.261l-6.2 3.722a1.651 1.651 0 0 1-2.265-.566Z"
              data-name="Caminho 33"
            />
            <Path
              d="M40.199 20.348a1.65 1.65 0 0 1-.444-2.292l4.047-5.994a1.651 1.651 0 0 1 2.292-.445l.209.141a1.65 1.65 0 0 1 .445 2.292l-4.047 5.994a1.651 1.651 0 0 1-2.292.444Z"
              data-name="Caminho 34"
            />
            <Path
              d="M33.65 17.643a1.65 1.65 0 0 1-1.372-1.889l1.135-7.143a1.65 1.65 0 0 1 1.889-1.371l.249.04a1.65 1.65 0 0 1 1.371 1.889l-1.134 7.139a1.65 1.65 0 0 1-1.889 1.371Z"
              data-name="Caminho 35"
            />
            <Path
              d="M26.571 17.959a1.65 1.65 0 0 1-2.041-1.133l-1.991-6.953a1.651 1.651 0 0 1 1.133-2.042l.242-.069a1.651 1.651 0 0 1 2.041 1.133l1.992 6.952a1.65 1.65 0 0 1-1.133 2.041Z"
              data-name="Caminho 36"
            />
            <Path
              d="M20.29 21.237a1.651 1.651 0 0 1-2.329-.164l-4.742-5.46a1.651 1.651 0 0 1 .164-2.329l.19-.165a1.65 1.65 0 0 1 2.329.164l4.742 5.46a1.651 1.651 0 0 1-.164 2.329Z"
              data-name="Caminho 37"
            />
            <Path
              d="M15.981 26.863a1.651 1.651 0 0 1-2.179.836l-6.606-2.945a1.651 1.651 0 0 1-.835-2.18l.1-.23a1.65 1.65 0 0 1 2.179-.836l6.606 2.945a1.651 1.651 0 0 1 .835 2.18Z"
              data-name="Caminho 38"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default LogoHeader;
