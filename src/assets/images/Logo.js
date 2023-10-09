import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Text, TSpan } from "react-native-svg";
const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={114.2}
    height={108.939}
    data-name="Grupo 88"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path fill="none" d="M0 0h114.2v59.921H0z" data-name="Ret\xE2ngulo 2" />
      </ClipPath>
    </Defs>
    <G fill="#3a1711" data-name="Grupo 6" fontFamily="Helvetica">
      <Text fontSize={32} transform="translate(15.995 85.323)">
        <TSpan x={0} y={0}>
          {"Farm"}
        </TSpan>
      </Text>
      <Text fontSize={21} transform="translate(19.059 103.939)">
        <TSpan x={0} y={0}>
          {"Control"}
        </TSpan>
      </Text>
    </G>
    <G data-name="Grupo 9">
      <G clipPath="url(#a)" data-name="Grupo 8">
        <G fill="#e55526" data-name="Grupo 7">
          <Path
            d="M37.458 74.384a22.938 22.938 0 1 1 31.472 7.862 22.938 22.938 0 0 1-31.472-7.862Z"
            data-name="Caminho 32"
          />
          <Path
            d="M83.382 47.386a3.06 3.06 0 0 1 1.048-4.2l11.492-6.9a3.06 3.06 0 0 1 4.2 1.048l.241.4a3.059 3.059 0 0 1-1.048 4.2l-11.492 6.9a3.06 3.06 0 0 1-4.2-1.049Z"
            data-name="Caminho 33"
          />
          <Path
            d="M74.5 37.712a3.059 3.059 0 0 1-.824-4.247l7.501-11.106a3.06 3.06 0 0 1 4.248-.824l.387.262a3.059 3.059 0 0 1 .824 4.247l-7.5 11.109a3.059 3.059 0 0 1-4.248.824Z"
            data-name="Caminho 34"
          />
          <Path
            d="M62.364 32.698a3.058 3.058 0 0 1-2.542-3.5l2.1-13.238a3.059 3.059 0 0 1 3.5-2.541l.462.074a3.059 3.059 0 0 1 2.541 3.5l-2.1 13.237a3.059 3.059 0 0 1-3.5 2.541Z"
            data-name="Caminho 35"
          />
          <Path
            d="M49.244 33.284a3.058 3.058 0 0 1-3.783-2.1l-3.689-12.886a3.061 3.061 0 0 1 2.1-3.784l.449-.128a3.059 3.059 0 0 1 3.783 2.1l3.688 12.886a3.059 3.059 0 0 1-2.1 3.783Z"
            data-name="Caminho 36"
          />
          <Path
            d="M37.603 39.359a3.06 3.06 0 0 1-4.317-.3l-8.789-10.12a3.06 3.06 0 0 1 .3-4.316l.353-.306a3.059 3.059 0 0 1 4.315.3l8.789 10.119a3.059 3.059 0 0 1-.3 4.316Z"
            data-name="Caminho 37"
          />
          <Path
            d="M29.618 49.786a3.059 3.059 0 0 1-4.039 1.549l-12.242-5.457a3.06 3.06 0 0 1-1.548-4.04l.191-.426a3.057 3.057 0 0 1 4.039-1.549l12.242 5.457a3.06 3.06 0 0 1 1.548 4.04Z"
            data-name="Caminho 38"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default Logo;
