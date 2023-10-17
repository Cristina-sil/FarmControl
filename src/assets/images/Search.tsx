import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgSearch(props: SvgProps) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      {...props}
    >
      <Path
        d="M13.804 11.32h-.81l-.287-.277a6.675 6.675 0 001.61-4.353c0-3.695-2.984-6.69-6.665-6.69C3.972 0 .99 2.995.99 6.69c0 3.694 2.983 6.69 6.663 6.69a6.62 6.62 0 004.337-1.617l.277.289v.813L17.392 18l1.527-1.533-5.115-5.146zm-6.152 0A4.616 4.616 0 013.04 6.69a4.616 4.616 0 014.613-4.632 4.616 4.616 0 014.614 4.632 4.616 4.616 0 01-4.614 4.63z"
        fill="#3A1711"
      />
    </Svg>
  )
}

export default SvgSearch