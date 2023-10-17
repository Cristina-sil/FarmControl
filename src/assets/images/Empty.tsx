import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const Empty = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={74}
    fill="none"
    {...props}
  >
    <Path
      stroke="#D7D7D7"
      strokeLinecap="round"
      strokeWidth={4}
      d="M15.5 32.44V9.57C15.5 5.39 18.903 2 23.1 2h32.3C59.597 2 63 5.39 63 9.571V60.68c0 4.181-3.403 7.571-7.6 7.571H34.5"
    />
    <Path
      stroke="#696969"
      strokeLinecap="round"
      strokeWidth={4}
      d="M23 28.25h33.125M41.125 40.125h15M44.25 51.375h11.875M23 17h33.125"
    />
    <Circle
      cx={23.313}
      cy={51.063}
      r={12.813}
      stroke="#696969"
      strokeWidth={4}
    />
    <Path
      stroke="#696969"
      strokeLinecap="round"
      strokeWidth={4}
      d="M13.625 60.75 2.375 72"
    />
  </Svg>
)
export default Empty
