import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const Alert = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={101}
    height={101}
    fill="none"
    {...props}
  >
    <Path
      fill="#D2373C"
      fillRule="evenodd"
      d="m88.791 77.712-34.46-59.066c-1.925-3.299-6.69-3.299-8.615 0l-34.46 59.066c-1.94 3.324.458 7.5 4.307 7.5h68.92c3.85 0 6.248-4.176 4.308-7.5Zm-30.153-61.58c-3.849-6.596-13.38-6.596-17.23 0L6.948 75.199c-3.88 6.65.917 15 8.615 15h68.92c7.699 0 12.495-8.35 8.616-15l-34.46-59.065Z"
      clipRule="evenodd"
    />
    <Path
      fill="#D2373C"
      fillRule="evenodd"
      d="M50.023 36.107c1.637 0 2.964 1.061 2.964 2.37v26.67c0 1.31-1.327 2.37-2.964 2.37-1.636 0-2.963-1.06-2.963-2.37v-26.67c0-1.309 1.327-2.37 2.963-2.37Z"
      clipRule="evenodd"
    />
    <Circle cx={50.024} cy={74.037} r={2.963} fill="#D2373C" />
  </Svg>
)
export default Alert
